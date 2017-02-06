'use strict';

const gulp = require('gulp');

// development
gulp.task('default', ['build'], () => {
  gulp.start('lint', 'watch', 'livereload');
});

gulp.task('build', () => {
  gulp.start('styles', 'scripts', 'moveTemplates');
})
