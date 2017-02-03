'use strict';

var gulp = require('gulp');

// development
gulp.task('default', ['build'], function() {
  gulp.start('watch', 'livereload');
});

gulp.task('build', () => {
  gulp.start('styles', 'scripts');
})
