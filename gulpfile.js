(function () {
    'use strict';

    const notify = require('gulp-notify');
    const eslint = require('gulp-eslint');
    const gulp = require('gulp');
    const path = require('path');

    const paths = {
        js: [
            path.join(__dirname, 'tests/**/*.js'),
            path.join(__dirname, 'config/**/*.js'),
            path.join(__dirname, '**/*.js'),
        ]
    };

    gulp.task('eslint', function () {
        return gulp.src(paths.js)
            .pipe(eslint({
                config: '.eslintrc'
            }))
            .pipe(eslint.format())
            .pipe(eslint.failAfterError())
            .on('error', notify.onError(function (error) {
                return {
                    title: 'ESLint Error',
                    message: error.message
                };
            }));
    });

    gulp.task('watch-eslint', function () {
        gulp.watch(paths.js, ['eslint']);
    });

    gulp.task('default', [
        'eslint',
        'watch-eslint'
    ]);
})();

