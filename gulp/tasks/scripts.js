'use strict';

const gulp = require('gulp'),
  plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
  });

// scripts
gulp.task('scripts', function() {
  return gulp.src(['./src/js/**/*js'])
    .pipe(plugins.concat('script.js'))
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('./public/js'));
});
