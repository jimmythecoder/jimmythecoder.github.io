module.exports = function (gulp, options, plugins) {
  'use strict';
  
  const useref 		= require('gulp-useref'),
      uglify        = require('gulp-uglify'),
      minifyHtml    = require('gulp-minify-html'),
      cleanCss      = require('gulp-clean-css'),
      rev           = require('gulp-rev'),
      revReplace	= require('gulp-rev-replace'),
      filter 		= require('gulp-filter'),
      fs            = require('fs'),
      pkg           = JSON.parse(fs.readFileSync('./package.json'));

  	gulp.task('build', ['sass', 'typescript'], function() {

      var jsFilter        = filter("./js/*.js", { restore: true });
      var cssFilter       = filter("./css/*.css", { restore: true });
      var indexHtmlFilter = filter(['./**/*', '!./src/*.html'], { restore: true });

      return gulp.src(['./src/*.html'])

        .pipe(useref())      // Concatenate with gulp-useref

        .pipe(jsFilter)
        .pipe(uglify())             // Minify any javascript sources
        .pipe(jsFilter.restore)

        .pipe(cssFilter)
        .pipe(cleanCss())               // Minify any CSS sources
        .pipe(cssFilter.restore)

        .pipe(indexHtmlFilter)
        .pipe(rev())                // Rename the concatenated files (but not index.html)
        .pipe(indexHtmlFilter.restore)

        .pipe(revReplace())         // Substitute in new filenames

        .pipe(gulp.dest('./'));

	  });
};