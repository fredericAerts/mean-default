'use strict';

const gulp = require('gulp');

gulp.task('moveTemplates', function() {
  return gulp.src(['./src/js/**/*.html'])
    .pipe(gulp.dest('./public/templates'));
});
