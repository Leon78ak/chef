'use strict';

module.exports = function () {
  $.gulp.task('pug', function () {
    return $.gulp.src('./source/template/pages/*.pug')
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(function (error) {
          return {
            title: 'Pug',
            message: error.message
          }
        })
      }))
      .pipe($.gp.pug({
        pretty: true,
        locals: JSON.parse($.fs.readFileSync('./content.json', 'utf-8'))
      }))
      .pipe($.gp.htmlBeautify({
        indentSize: 2
      }))
      .pipe($.gulp.dest('./build/'));
  });
};
