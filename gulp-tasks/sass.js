module.exports = function (gulp, options, plugins) {
    'use strict';

    const sass 		   = require('gulp-sass'),
          sourcemaps   = require('gulp-sourcemaps'),
          browserSync  = require("browser-sync").get('sync-server');

    gulp.task('sass', function() {
        return gulp.src('./src/scss/app.scss')
          .pipe(sourcemaps.init())
          .pipe(sass().on('error', sass.logError))
          .pipe(sourcemaps.write())
          .pipe(gulp.dest('./src/css'))
          .pipe(browserSync.stream());
  	});
};