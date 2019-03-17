var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config.js'); // config.jsの読み込み

gulp.task('watch', function() {

  // scssファイルの変更を監視しsassタスクを実行する
  watch([config.src + '/**/*.scss', config.scss + '/**/*.scss'], function() {
    gulp.parallel(['sass']);
  });
});

