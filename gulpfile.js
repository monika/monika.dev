// Set up plugins
const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const sharp = require('sharp');

// Resize + Optimize images
/* Sending straight to /dist because Eleventy is going to barf itself
// remaking templates if the /image directory updates this often */
const IMAGE_SOURCE_DIR = 'src/images';
const IMAGE_OUTPUT_DIR = 'src/images-resized';
const IMAGE_SIZES = [
  { width: 200, suffix: 'small' },
  { width: 400, suffix: 'small@2x' },
  { width: 400, suffix: 'medium' },
  { width: 800, suffix: 'medium@2x' },
  { width: 800, suffix: 'large' }
];
// Screenshots of code stay at high quality — compression artifacts around small
// text are far more visible than on photographic content.
const IMAGE_QUALITY = { photo: 78, text: 92 };

/* Project thumbnails are full-page screenshots — tall enough that feeding one
   to a social card would crop to a meaningless horizontal sliver. These get an
   extra pass cropped to the ~1.91:1 the platforms actually want, anchored to
   the top so the card shows the hero rather than the middle of the page. */
const SOCIAL_CARD = { width: 1200, height: 630 };

// Read the thumbnails the project pages declare, so adding a project doesn't
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

async function resizeImages() {
  const files = fs
    .readdirSync(IMAGE_SOURCE_DIR)
    .filter((file) => /^img-.*\.(jpe?g|png)$/i.test(file));

  fs.mkdirSync(IMAGE_OUTPUT_DIR, { recursive: true });

  const thumbnails = projectThumbnails();

  await Promise.all(
    files.map(async (file) => {
      const basename = path.basename(file, path.extname(file));
      const input = path.join(IMAGE_SOURCE_DIR, file);
      const quality = basename.includes('code-example')
        ? IMAGE_QUALITY.text
        : IMAGE_QUALITY.photo;

      await Promise.all(
        IMAGE_SIZES.map(async ({ width, suffix }) => {
          const image = sharp(input).resize(width, null, {
            withoutEnlargement: true
          });

          await image
            .clone()
            .jpeg({ quality, mozjpeg: true })
            .toFile(path.join(IMAGE_OUTPUT_DIR, `${basename}-${suffix}.jpg`));

          await image
            .clone()
            .webp({ quality })
            .toFile(path.join(IMAGE_OUTPUT_DIR, `${basename}-${suffix}.webp`));
        })
      );

      if (thumbnails.has(basename)) {
        await sharp(input)
          .resize(SOCIAL_CARD.width, SOCIAL_CARD.height, {
            fit: 'cover',
            position: 'top'
          })
          .jpeg({ quality: IMAGE_QUALITY.photo, mozjpeg: true })
          .toFile(path.join(IMAGE_OUTPUT_DIR, `${basename}-social.jpg`));
      }
    })
  );
}

// Watch files
function watchFiles() {
  gulp.watch('src/images/*', { ignoreInitial: false }, resizeImages);
}

// Build files
exports.images = resizeImages;
exports.build = resizeImages;
exports.default = gulp.series(watchFiles);
