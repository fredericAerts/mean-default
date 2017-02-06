'use strict';

const gulp = require('gulp'),
  plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
  });

gulp.task('lint', function() {
  return gulp.src([
      'src/js/**/*.module.js',
      'src/js/**/*.js'
    ])
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format());
});
