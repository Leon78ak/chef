'use strict';

module.exports = function () {
  $.gulp.task('imagemin', function () {
    return $.gulp.src("build/img/**/*.{png,jpg}")
      .pipe($.gp.imagemin([
        $.gp.imagemin.optipng({optimizationLevel: 3}),
        $.gp.imagemin.jpegtran({progressive: true})
        // imagemin.svgo()
      ]))
      .pipe($.gulp.dest("build/img"));
  });
}
