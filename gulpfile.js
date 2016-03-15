var gulp = require('gulp');
var karma = require('gulp-karma');
 
gulp.task('karma', function () {
  gulp.src([
    'app/js/app.js',
    'app/spec/appSpec.js'
    // add Libs if nessesary
  ]).pipe(karma({
    configFile: 'karma.conf.js',
    action: 'run'
    })
  );
});