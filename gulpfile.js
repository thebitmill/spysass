var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {
	gulp.src('./sass/variables/**/*.scss').
	 pipe(concat('_variables_spysass.scss')).
	 pipe(gulp.dest('./sass/variables/'));
});
