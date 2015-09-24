'use strict'

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    browserSync = require("browser-sync").create(),
    reload = browserSync.reload;

gulp.task('sass', function() {
    return gulp.src("src/styles/**/*.scss")
        // outputStyle  :nested, expanded, compact, compressed
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(reload({
        	stream:true
        }))
        .pipe(gulp.dest("diet/styles"));

});

gulp.task("browser-reload",['sass'],function() {
	browserSync.init({
		server:{
			baseDir:"./",
			index:"index.html"
		}
	});

	gulp.watch("src/styles/**/*.scss", ["sass"]);
    gulp.watch("*.html").on("change", reload);
});

gulp.task('default', ['browser-reload'], function() {
    console.log('好好学习，天天向上————gulp 是不是读“干”  那就  干起来吧！');
});
