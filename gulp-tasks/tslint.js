module.exports = function (gulp, options, plugins) {
	'use strict';

	const tslint    = require("gulp-tslint"),
          fs        = require("fs"),
          tsconfig  = JSON.parse(fs.readFileSync('./tsconfig.json'));

	//Check tsconfig.json for this tasks source config
  	gulp.task('tslint', function() {
        return gulp.src(tsconfig.include)
            .pipe(tslint())
            .pipe(tslint.report())
        });
};
