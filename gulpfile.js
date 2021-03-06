var gulp = require('gulp');
var serve = require('gulp-serve');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['style','scripts','watch']);

gulp.task('style', function(){
	return sass('dev/scss/*.scss')
		.pipe(concat('style.min.css'))
		.pipe(autoprefixer({
			browsers: ['last 4 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('public/assets/css'));
});

gulp.task('scripts', function(){
	return gulp.src('dev/js/*.js')
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/assets/js'));
});

gulp.task('watch', function(){
	gulp.watch('dev/scss/*.scss', ['style']);
	gulp.watch('dev/js/*.js', ['scripts']);
});

gulp.task('serve', serve('public'));
gulp.task('serve-build', serve(['public', 'build']));
gulp.task('serve-prod', serve({
  root: ['public', 'build'],
  port: 80,
  middleware: function(req, res) {
    // custom optional middleware 
  }
}));