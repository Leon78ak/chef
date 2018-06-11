'use strict';

module.exports = function () {
  // задача для разработки
  $.gulp.task('styles:dev', function () {
    return $.gulp.src('./source/style/main.scss')
      .pipe($.gp.plumber())
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sassGlob())
      .pipe($.gp.sass())
      .on('error', $.gp.notify.onError({
          title: 'Style'
        }))
      .pipe($.gp.autoprefixer({
          browsers: [
            'last 3 version',
            '> 1%'
          ]
        }))
      // .pipe($.gp.cssUnit({
      //   type: 'px-to-rem',
      //   rootSize: 16
      // }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest('./build/css'))
      .pipe($.browserSync.stream());
  });

  // убираем из билда соурсмэп
  $.gulp.task('styles:build', function () {
    return $.gulp.src('./source/style/main.scss')
      .pipe($.gp.plumber())
      .pipe($.gp.sassGlob())
      .pipe($.gp.sass())
      .on('error', $.gp.notify.onError({
          title: 'Style'
        }))
      .pipe($.gp.autoprefixer({
          browsers: [
            'last 3 version',
            '> 1%'
          ]
        }))
      // .pipe($.gp.cssComb())
      .pipe($.gp.cssUnit({
        type: 'px-to-rem',
        rootSize: 16
      }))
      .pipe($.gp.csso())
      .pipe($.gp.rename("main.min.css"))
      .pipe($.gulp.dest('./build/css'))
      .pipe($.browserSync.stream());
  });
}
