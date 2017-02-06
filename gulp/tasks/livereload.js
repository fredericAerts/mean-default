'use strict';

const gulp = require('gulp'),
  plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
  }),
  browserSync = require('browser-sync').create();

gulp.task('livereload', () => {
  browserSync.init(null, {
    proxy: 'http://localhost:5000',
      files: ['public/**/*.*'],
      browser: 'google chrome',
      port: 3000,
  });
});
