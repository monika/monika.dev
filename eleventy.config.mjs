import fs from 'node:fs';
import path from 'node:path';
import * as sass from 'sass';
import markdownIt from 'markdown-it';
import Image, { generateHTML } from '@11ty/eleventy-img';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import eleventyNavigation from '@11ty/eleventy-navigation';

/* The widths the markup actually asks for. The old Gulp task emitted five
   entries for these same three widths — "small@2x" was byte-identical to
   "medium", "medium@2x" to "large" — and no template ever referenced the
   "@2x" names, so two fifths of every image shipped as dead weight. */
const IMAGE_WIDTHS = [200, 400, 800];

// Screenshots of code stay at high quality — compression artifacts around small
// text are far more visible than on photographic content.
const IMAGE_QUALITY = { photo: 78, text: 92 };

/* Generated derivatives live under /img/ rather than /images/, which stays the
   home of hand-managed files copied through as-is. The split is what lets the
   two get different cache headers: these filenames carry a content hash, so
   they can be immutable, while /images/ filenames are stable and cannot. */
const IMAGE_OUTPUT = {
  outputDir: 'dist/img/',
  urlPath: '/img/',
  /* The default is the hash alone, which makes a network panel or a build diff
     unreadable. Keeping the source name in front costs nothing and the hash
     still does the cache-busting. */
  filenameFormat: (id, src, width, format) =>
    `${path.basename(src, path.extname(src))}-${id}-${width}.${format}`
};

/* Project thumbnails are full-page screenshots — tall enough that feeding one
   to a social card would crop to a meaningless horizontal sliver. The card gets
   its own pass cropped to the ~1.91:1 the platforms want, anchored to the top
   so it shows the hero rather than the middle of the page. */
const SOCIAL_CARD = { width: 1200, height: 630 };

/* Content refers to images by basename. The extension varies — screenshots of
   code are PNG, photographs are JPEG — so resolve it here instead of making
   every call site know. */
function imageSource(basename) {
  for (const extension of ['jpg', 'png']) {
    const candidate = path.join('src/images', `${basename}.${extension}`);
    if (fs.existsSync(candidate)) return candidate;
  }

  throw new Error(`No image in src/images matching "${basename}" (.jpg or .png)`);
}

async function picture(basename, alt, sizes, options = {}) {
  const { quality = IMAGE_QUALITY.photo, pictureClass, imgClass } = options;

  const metadata = await Image(imageSource(basename), {
    ...IMAGE_OUTPUT,
    widths: IMAGE_WIDTHS,
    formats: ['webp', 'jpeg'],
    sharpJpegOptions: { quality, mozjpeg: true },
    sharpWebpOptions: { quality }
  });

  const imgAttributes = { alt, sizes, loading: 'lazy', decoding: 'async' };
  if (imgClass) imgAttributes.class = imgClass;

  return generateHTML(metadata, imgAttributes, {
    pictureAttributes: pictureClass ? { class: pictureClass } : {}
  });
}

// Reads the thumbnails the project pages declare, so adding a project doesn't
// mean remembering to update a list here.
function projectThumbnails() {
  const dir = 'src/projects';
  const names = new Set();

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    for (const file of fs.readdirSync(path.join(dir, entry.name))) {
      if (!file.endsWith('.md')) continue;
      const body = fs.readFileSync(path.join(dir, entry.name, file), 'utf8');
      const match = body.match(/^thumbnail:\s*(\S+)\s*$/m);
      if (match) names.add(match[1]);
    }
  }

  return names;
}

export default function (eleventyConfig) {
  /* Typographer turns straight quotes into curly ones, and -- into a dash, so
     prose doesn't depend on remembering to type entities. It only touches text
     tokens: code blocks, inline code and raw HTML attributes are left alone. */
  eleventyConfig.setLibrary(
    'md',
    markdownIt({ html: true, breaks: false, linkify: false, typographer: true })
  );

  /* Netlify sets CONTEXT on its builds, so this is true only for a production
     deploy — local previews, branch deploys and deploy previews all skip the
     analytics tag rather than reporting themselves as real traffic. */
  eleventyConfig.addGlobalData(
    'isProduction',
    process.env.CONTEXT === 'production'
  );

  /* The whole stylesheet is inlined into <head>, so it's compiled here rather
     than written to a file for a template to include: one compile per build,
     shared by every page, instead of re-minifying the same CSS 45 times.
     `charset: false` suppresses the BOM Sass would otherwise emit for the
     non-ASCII content — the document is already declared UTF-8, and a BOM
     inside a <style> element is just a stray character. */
  eleventyConfig.addGlobalData('css', () =>
    sass.compile('src/scss/style.scss', {
      style: 'compressed',
      charset: false
    }).css
  );

  // Sass isn't a template format Eleventy tracks, so point the watcher at it.
  eleventyConfig.addWatchTarget('src/scss/');

  /* Social card URLs are resolved up front rather than in the template: the
     filename carries a content hash now, so `meta.njk` can no longer build the
     path by concatenating the thumbnail name. */
  eleventyConfig.addGlobalData('socialCards', async () => {
    const cards = {};

    for (const basename of projectThumbnails()) {
      const metadata = await Image(imageSource(basename), {
        ...IMAGE_OUTPUT,
        widths: [SOCIAL_CARD.width],
        formats: ['jpeg'],
        sharpJpegOptions: { quality: IMAGE_QUALITY.photo, mozjpeg: true },
        // Resizing inside `transform` lets Sharp crop instead of scale;
        // eleventy-img detects the new dimensions and skips its own resize.
        transform: (sharp) =>
          sharp.resize(SOCIAL_CARD.width, SOCIAL_CARD.height, {
            fit: 'cover',
            position: 'top'
          })
      });

      cards[basename] = metadata.jpeg.at(-1).url;
    }

    return cards;
  });

  /* One shortcode behind every <picture> on the site. The three call sites
     previously repeated the same markup with only `sizes` differing, each
     hardcoding the width list and the small/medium/large filenames. */
  eleventyConfig.addAsyncShortcode('image', (basename, alt, sizes, pictureClass, imgClass) =>
    picture(basename, alt, sizes, { pictureClass, imgClass })
  );

  // Code screenshots: same pipeline, higher quality, and the `img-` prefix the
  // existing content omits.
  eleventyConfig.addAsyncShortcode('codeExample', (basename, alt) =>
    picture(`img-${basename}`, alt, '(max-width: 648px) 80vw, 70vw', {
      quality: IMAGE_QUALITY.text
    })
  );

  // Custom Project Listing Sort Order
  eleventyConfig.addCollection('projectListing', function(collection) {
    return collection.getFilteredByTag('project').sort((a, b) => {
      return a.data.displayOrder - b.data.displayOrder;
    });
  });

  // Custom Case Study Listing Sort Order (manual order, not publish date,
  // so a batch of new entries doesn't all appear "posted" the same week)
  eleventyConfig.addCollection('caseStudyListing', function(collection) {
    return collection.getFilteredByTag('caseStudy').sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

  // Narrows a case study list to the entries that actually have a page built
  eleventyConfig.addFilter('selectPublished', function(items) {
    return (items || []).filter((item) => item.data.availability === 'full');
  });

  // Shapes a list of topic strings into schema.org Thing nodes for JSON-LD `about`
  eleventyConfig.addFilter('schemaThings', function(items) {
    return (items || []).map((name) => ({ '@type': 'Thing', name }));
  });

  // Add syntax highlighting via prism.js
  eleventyConfig.addPlugin(syntaxHighlight, {
    templateFormats: ['md', 'njk', 'html', 'css']
  });

  // Add navigation plugin
  eleventyConfig.addPlugin(eleventyNavigation);

  eleventyConfig.setTemplateFormats(['njk', 'md', 'html']);

  /* Everything under src/images is hand-managed and served as authored: the
     SVGs the stylesheets reference, the portrait the JSON-LD points at, and the
     fallback social card. Derivatives are generated into /img/ instead. */
  eleventyConfig.addPassthroughCopy('src/robots.txt');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/favicon.png');
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');
  eleventyConfig.addPassthroughCopy('src/images/*.svg');
  eleventyConfig.addPassthroughCopy('src/images/social.png');
  eleventyConfig.addPassthroughCopy('src/images/img-monika.jpg');
  eleventyConfig.addPassthroughCopy('src/fonts');

  // Basic config settings
  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      layouts: 'includes/layouts',
      markdownTemplateEngine: 'njk',
      passthroughFileCopy: true
    }
  };
}
