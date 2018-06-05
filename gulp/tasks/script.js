'use strict';

module.exports = function () {
  $.gulp.task('script', function () {
    return $.gulp.src('./source/js/**/*.js')
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(function (error) {
          return {
            title: 'js',
            message: error.message
          }
        })
      }))
      // .pipe($.gp.concat())
      .pipe($.gp.uglify())
      // .pipe($.gp.rename({
      //   suffix: '.min'
      // }))
      .pipe($.gulp.dest('./build/js'))
  });
};
