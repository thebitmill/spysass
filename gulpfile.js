var gulp = require('gulp')
var concat = require('gulp-concat')
var ignore = require('gulp-ignore')
var rimraf = require('rimraf')

gulp.task('default', function () {
  gulp
    .src(['./sass/variables/**/*.scss', '!**/themes/**', '!**/_variables_spysass.scss'])
    //.pipe(ignore('**/themes/**', '**/_variables_spysass.scss'))
    .pipe(concat('_variables_spysass.scss'))
    .pipe(gulp.dest('./sass/variables/'))
})
