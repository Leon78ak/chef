'use strict';

module.exports = function () {
  $.gulp.task('deploy', function () {
    return $.gulp.src('build/**/*')
      .pipe($.gp.ghPages());
  });
};
