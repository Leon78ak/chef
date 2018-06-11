'use strict';

module.exports = function () {
  $.gulp.task('copy', function() {
    return $.gulp.src([
    'source/fonts/**/*.{woff,woff2}',
    'source/img/**/*.{png,jpg}',
    'source/resume/**/*.{doc,pdf}',
    'source/jquery.fancybox-1.3.4/**/*',
    'source/wow-animation/**/*'
    ], {
      base: 'source'
    })
    .pipe($.gulp.dest('build'));
  });
};
