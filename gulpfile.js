const gulp = require('gulp');

const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

const uglify  = require('gulp-uglify');

var htmlmin = require('gulp-htmlmin');

gulp.task('compile-html', ()=> 

	gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'))

);

gulp.task('compile-sass', ()=> 

	gulp.src('./src/scss/main.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(autoprefixer())
		.pipe(concat('bundle.min.css'))
		.pipe(gulp.dest('./dist/assets/css'))

);

gulp.task('compile-scripts', ()=> 

	gulp.src([
	    	'./src/js/jquery-3.3.1.min.js',
	    	'./src/js/popper.min.js',
	    	'./src/js/bootstrap.min.js',
	    	'./src/js/main.js'
	    ])
		.pipe(uglify())
		.pipe(concat('bundle.min.js'))
		.pipe(gulp.dest('./dist/assets/js'))

);

gulp.task('default', function(event) {

	gulp.watch('./src/*.html', ['compile-html']);

	gulp.watch('./src/scss/**/*.scss', ['compile-sass']);

	gulp.watch('./src/js/*.js', ['compile-scripts']);

});