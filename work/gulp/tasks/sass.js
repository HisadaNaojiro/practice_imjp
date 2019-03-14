var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var config = require('../config.js'); // config.jsの読み込み

gulp.task('sass', function() {
  return gulp.src(config.src + '/**/*.scss')
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest(config.build));
});
