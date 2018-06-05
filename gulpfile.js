'use strict';

global.$ = {
  path: {
    task: require('./gulp/paths/tasks.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  fs: require('fs'),
  gp: require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
  'clean',
  'copy',
  'svg',
  $.gulp.parallel(
    'styles:dev',
    'pug',
    'script'
  )
));

$.gulp.task('build', $.gulp.series(
  'clean',
  'copy',
  'svg',
  $.gulp.parallel(
    'styles:build',
    'pug',
    'script',
    'imagemin'
    ),
    $.gulp.parallel(
    'watch',
    'serve'
    )
  )
);

$.gulp.task('default', $.gulp.series(
  'dev',
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
