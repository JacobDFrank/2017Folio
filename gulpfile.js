var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    babel = require('gulp-babel'),
    browserify = require('gulp-browserify')

gulp.task('default', function() {
    gulp.src('./js/**.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(notify({
            message: 'build complete.',
            onLast: true
        }))
})

gulp.task('watch', function() {
    gulp.watch('./js/**.js', function() {
        gulp.run('default')
    })
})
