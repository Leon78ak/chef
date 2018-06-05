'use strict';

module.exports = function() {
  $.gulp.task('svg', function() {
    return $.gulp.src('./source/img/svg/*.svg')
    // minify svg
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      // remove all fill, style and stroke declarations in out shapes
      .pipe($.gp.cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: { xmlMode: true }
      }))
      // cheerio plugin create unnecessary string '&gt;', so replace it.
      .pipe($.gp.replace('&gt;', '>'))
      // build svg sprite.svg
      .pipe($.gp.svgSprite({
        mode: {
          symbol: {
            sprite: 'sprite.svg'
            // render: {
            //   scss: {
            //     dest:'../../../../sass/_sprite.scss',
            //     template: './source/sass/templates/_sprite_template.scss'
            //   }
            // }
          }
        }
      }))
      .pipe($.gulp.dest('./build/img/svg/sprite/'));
  })
};
