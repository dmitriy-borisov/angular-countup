var gulp	= require('gulp');
var uglify	= require('gulp-uglify');
var rename	= require('gulp-rename');

gulp.task('build', function() {
	return gulp.src('./angular-countup.js')
		.pipe(uglify({
			preserveComments: 'all'
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./'));
});