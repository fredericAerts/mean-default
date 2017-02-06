'use strict';

const gulp = require('gulp'),
  plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
  });

// scripts
gulp.task('scripts', () => {
  return gulp.src([
      './src/vendor/angular/angular.js',
      './src/vendor/angular-resource/angular-resource.js',
      './src/vendor/angular-route/angular-route.js',
      './src/vendor/angular-animate/angular-animate.js',
      './src/js/**/*.module.js',
      './src/js/**/*.js'
    ])
    .pipe(plugins.cached())
    .pipe(plugins.babel({
      presets: ['es2015'],
      compact: true
    }))
    .pipe(plugins.remember())
    .pipe(plugins.concat('script.js'))
    .pipe(plugins.rename({suffix: '.min'}))
    // .pipe(plugins.uglify())
    .pipe(gulp.dest('./public/js'));
});
