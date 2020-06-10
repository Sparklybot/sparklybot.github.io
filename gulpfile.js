const gulp = require('gulp');
const csso = require('gulp-csso');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const terser = require('gulp-terser');

gulp.task('style', function () {
    const tailwindCss = require('tailwindcss');

    let stream = gulp.src('build/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            tailwindCss('./tailwind.config.js'),
            require('autoprefixer'),
        ]));

    stream = stream
        .pipe(csso())
        .pipe(gulp.dest('./css/'));

    return stream;
});

gulp.task('js', async function () {
    let stream = gulp.src(['./build/js/**/*.js']);

    stream = stream.pipe(terser({
        keep_fnames: false,
        mangle: true
    }));

    stream = stream.pipe(gulp.dest('./js/'));

    return stream;
});

gulp.task('default', gulp.series('style','js'));
gulp.task('build', gulp.series('style','js'));
