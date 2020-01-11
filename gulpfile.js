// Set up plugins
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const responsive = require('gulp-responsive');

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
function resizeImages() {
  return gulp
    .src('src/images/img-*.{jpg,png}')
    .pipe(
      responsive(
        {
          'img-*.{jpg,png}': [
            // Define jpg at two resolutions
            {
              width: 200,
              rename: {
                suffix: '-small',
                extname: '.jpg'
              }
            },
            {
              width: 200 * 2,
              rename: {
                suffix: '-small@2x',
                extname: '.jpg'
              }
            },
            {
              width: 400,
              rename: {
                suffix: '-medium',
                extname: '.jpg'
              }
            },
            {
              width: 400 * 2,
              rename: {
                suffix: '-medium@2x',
                extname: '.jpg'
              }
            },
            {
              width: 800,
              rename: {
                suffix: '-large',
                extname: '.jpg'
              }
            },
            // Define webp at two resolutions
            {
              width: 200,
              rename: {
                suffix: '-small',
                extname: '.webp'
              }
            },
            {
              width: 200 * 2,
              rename: {
                suffix: '-small@2x',
                extname: '.webp'
              }
            },
            {
              width: 400,
              rename: {
                suffix: '-medium',
                extname: '.webp'
              }
            },
            {
              width: 400 * 2,
              rename: {
                suffix: '-medium@2x',
                extname: '.webp'
              }
            },
            {
              width: 800,
              rename: {
                suffix: '-large',
                extname: '.webp'
              }
            }
          ]
        },
        {
          // Global configuration for all images
          quality: 90,
          withMetadata: false
        }
      )
    )
    .pipe(gulp.dest('src/images-resized'));
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
