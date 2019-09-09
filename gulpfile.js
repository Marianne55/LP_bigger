const gulp = require('gulp');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const minifyCss = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');

gulp.task('bundle-js', () => {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('style',() => {
    return gulp.src('./src/style/*.less')
        .pipe(less())
        .pipe(postcss([
            autoprefixer({
                cascade: true, //是否美化属性值 默认：true
                remove: true //是否去掉不必要的前缀 默认：true
            })
        ]))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/style'));
});

gulp.task('html', () => {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});

gulp.task('images', () => {
    return gulp.src('./src/images/*')
        .pipe(gulp.dest('./dist/images'))
});

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    gulp.watch('./src/*.html', gulp.series('html'));
    gulp.watch('./src/style/**/*.less', gulp.series('style'));
    gulp.watch('./src/images/*', gulp.series('images'));
    gulp.watch('./src/js/*', gulp.series('bundle-js'));
    gulp.watch('./dist/**/*').on('change', browserSync.reload);
});

gulp.task('default', gulp.series(
    gulp.parallel('style', 'html', 'images'),
    'bundle-js',
    'browser-sync'
));
