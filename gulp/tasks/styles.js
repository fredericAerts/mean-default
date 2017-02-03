'use strict';

const gulp = require('gulp'),
  plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
  }),
  browserSync = require('browser-sync').create();

gulp.task('styles', () => {
  return gulp.src('./src/css/main.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer({
      cascade: false
    }))
    .pipe(plugins.concat('style.css'))
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(plugins.cssnano({
      discardComments: {
        removeAll: true
      }
    }))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());
});
