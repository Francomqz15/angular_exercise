'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('./src/app/**/*.component.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('src/assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/app/**/*.component.sass', ['sass']);
});


gulp.task('default', ['sass:watch']);