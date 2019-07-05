// Set up plugins
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// Compile CSS
function css() {
  return gulp
    .src('src/includes/scss/*')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      grid: 'no-autoplace',
      browsers: ['>1%']
    }))
    .pipe(gulp.dest('src/includes/css/'));
}

// Watch files
function watchFiles() {

  gulp.watch('src/includes/scss/*', css);

}

const build = gulp.series(css);
const watch = gulp.series(css, watchFiles);

// Build files
exports.css = css;
exports.build = build;
exports.default = watch;