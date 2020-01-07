// Set up plugins
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const webp = require('gulp-webp');

// Compile CSS
function compileCSS() {
  return gulp
    .src('src/includes/scss/*')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      grid: 'no-autoplace'
    }))
    .pipe(gulp.dest('src/includes/css/'));
}

// Optimize Images - sending to /dist since Eleventy can't passing files along, errors out
function optimizeImages() {
  return gulp
    .src('src/images/*.{jpg,png}')
    .pipe(
      webp({
        quality: 90
      })
    )
    .pipe(gulp.dest('src/webp/'));
}

// Watch files
function watchFiles() {
  gulp.watch('src/includes/scss/*', css);
  gulp.watch('src/images/*', { ignoreInitial: false }, optimizeImages);
}

const build = gulp.parallel(compileCSS, optimizeImages);
const watch = gulp.series(watchFiles);

// Build files
exports.css = compileCSS;
exports.images = optimizeImages;
exports.build = build;
exports.default = watch;
