'use strict';

const gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({
      pattern: ['gulp-*', 'gulp.*'],
      replaceString: /\bgulp[\-.]/
    });

gulp.task('watch', function() {
  gulp.watch('./src/css/**/*.scss', ['styles']);
  gulp.watch('./src/js/**/*.js', ['scripts']);
});
