const cleanCSS = require('clean-css');
const markdownIt = require('markdown-it');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const eleventyNavigation = require('@11ty/eleventy-navigation');

module.exports = function(eleventyConfig) {
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

  // Clean and minimize CSS
  eleventyConfig.addFilter('cssmin', function(code) {
    return new cleanCSS({}).minify(code).styles;
  });

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

  // Shapes a list of topic strings into schema.org Thing nodes for JSON-LD `about`
  eleventyConfig.addFilter('schemaThings', function(items) {
    return (items || []).map((name) => ({ '@type': 'Thing', name }));
  });

  // Code Example Image Nunjucks shortcode
  eleventyConfig.addShortcode('codeExample', function(imgFileName, imgAlt) {
    return `<picture>
    <source
        type="image/webp"
        srcset="/images/img-${imgFileName}-small.webp 200w,
                /images/img-${imgFileName}-medium.webp 400w,
                /images/img-${imgFileName}-large.webp 800w"
        sizes="(max-width: 648px) 80vw, 70vw"
    />
    <img
        srcset="/images/img-${imgFileName}-small.jpg 200w,
                /images/img-${imgFileName}-medium.jpg 400w,
                /images/img-${imgFileName}-large.jpg 800w"
        sizes="(max-width: 648px) 80vw, 70vw"
        src="/images/img-${imgFileName}-large.jpg"
        alt="${imgAlt}"
        loading="lazy"
        decoding="async"
    />
  </picture>`;
  });

  // Add syntax highlighting via prism.js
  eleventyConfig.addPlugin(syntaxHighlight, {
    templateFormats: ['md', 'njk', 'html', 'css']
  });

  // Add navigation plugin
  eleventyConfig.addPlugin(eleventyNavigation);

  eleventyConfig.setTemplateFormats(['njk', 'md', 'html']);

  // Pass these assets through
  eleventyConfig.addPassthroughCopy('src/robots.txt');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/favicon.png');
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');
  eleventyConfig.addPassthroughCopy({ 'src/images-resized': 'images' });
  eleventyConfig.addPassthroughCopy('src/images');
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
};
