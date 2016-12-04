var gulp = require('gulp');

var options = {
	pattern: ['gulp-tasks/**/*.js'],
	timestamp: Date.now()
};

require('load-gulp-tasks')(gulp, options);