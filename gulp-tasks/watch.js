module.exports = function (gulp, options, plugins) {
    'use strict';

    const fs        = require("fs"),
          tsconfig  = JSON.parse(fs.readFileSync('./tsconfig.json'));

    const sources = {

        sass: [
            './scss/*.scss',
        ],
        typescript: tsconfig.include
    };

    gulp.task('watch', ['browser-sync'], function() {

        const browserSync = require("browser-sync").get('sync-server');

        gulp.watch(sources.sass, ['sass']);
        gulp.watch(sources.typescript, ['typescript']);
        gulp.watch("./*.html").on('change', browserSync.reload);
        
    });
};