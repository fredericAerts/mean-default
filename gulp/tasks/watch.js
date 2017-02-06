'use strict';

const gulp = require('gulp'),
  plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
  });

gulp.task('watch', () => {
  gulp.watch('./src/css/**/*.scss', ['styles']);
  gulp.watch('./src/js/**/*.js', ['scripts', 'lint']);
  gulp.watch('./src/js/**/*.html', ['moveTemplates']);
});
