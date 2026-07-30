// Set up plugins
const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer').default;
const sharp = require('sharp');

// Compile CSS
function compileCSS() {
  return gulp
    .src('src/scss/*')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        grid: 'no-autoplace'
      })
    )
    .pipe(gulp.dest('src/includes/css/'));
}

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

async function resizeImages() {
  const files = fs
    .readdirSync(IMAGE_SOURCE_DIR)
    .filter((file) => /^img-.*\.(jpe?g|png)$/i.test(file));

  fs.mkdirSync(IMAGE_OUTPUT_DIR, { recursive: true });

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
    })
  );
}

// Watch files
function watchFiles() {
  gulp.watch('src/scss/*', { ignoreInitial: false }, compileCSS);
  gulp.watch('src/images/*', { ignoreInitial: false }, resizeImages);
}

const build = gulp.parallel(compileCSS, resizeImages);
const watch = gulp.series(watchFiles);

// Build files
exports.css = compileCSS;
exports.images = resizeImages;
exports.build = build;
exports.default = watch;
