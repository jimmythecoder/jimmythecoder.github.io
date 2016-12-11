module.exports = function (gulp, options, plugins) {
	'use strict';
	
	const browserSync = require('browser-sync').create('sync-server');

  	gulp.task('browser-sync', function() {
		browserSync.init({
			 server: {
	            baseDir: "./"
	        },
	        startPath: '/src'
		});
	});
};