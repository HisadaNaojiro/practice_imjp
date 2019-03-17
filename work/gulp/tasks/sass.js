var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var config = require('../config.js'); // config.jsの読み込み

gulp.task('sass', function() {
  return gulp.src(config.src + '/**/*.scss')
    // sass構文エラーが起きても処理を継続できるように
    .pipe(plumber({
      errorHandler: function(err) {
        console.log(err.messageFormatted);
        this.emit('end');
      }
    }))
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(postcss([
      autoprefixer({
        browsers: [
          'last 2 versions',
          'iOS >= 8',
          'Android >= 4'
        ]
      })
    ]))
    .pipe(gulp.dest(config.build));
});
