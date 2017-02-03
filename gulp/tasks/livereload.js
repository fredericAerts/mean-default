'use strict';

const gulp = require('gulp'),
  plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
  }),
  browserSync = require('../utils/browser-sync').browserSync;

gulp.task('livereload', function() {
  browserSync.init(null, {
    proxy: 'http://localhost:5000',
      files: ['public/**/*.*'],
      browser: 'google chrome',
      port: 7000,
  });
});
