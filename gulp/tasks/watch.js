'use strict';

module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch('./source/style/**/*.scss',
  $.gulp.series('styles:dev'));
    $.gulp.watch('./source/template/**/*.pug',
  $.gulp.series('pug'));
    $.gulp.watch('./source/img/svg/*.svg',
  $.gulp.series('svg'));
    $.gulp.watch('./source/js/*.js',
      $.gulp.series('script'));
  });
};
