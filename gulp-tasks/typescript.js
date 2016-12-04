module.exports = function (gulp, options, plugins) {
	'use strict';

	const ts 		= require('gulp-typescript'),
		notify    	= require('gulp-notify'),
		concat 		= require('gulp-concat'),
		sourcemaps 	= require('gulp-sourcemaps'),
		browserSync = require("browser-sync").get('sync-server'),
		tsProject 	= ts.createProject('./tsconfig.json');

	//Check tsconfig.json for this tasks config
  	gulp.task('typescript', ['tslint'], function() {
		var tsResult = tsProject.src() 
			.pipe(sourcemaps.init())
			.pipe(tsProject())
			.on("error", notify.onError("<%= error.message %>"));
		
		return tsResult.js
			.pipe(concat('app.js'))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('./js'))
			.pipe(browserSync.stream());
	});
};
