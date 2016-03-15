JavaScritp test sample project
===

This is JavaScript Simple Test Sample Project using following tools.  

* Gulp
* Jasmine
* Karma
* PhantomJS
* SinonJS


# How to use this project

(1) install NodeJS.  
https://nodejs.org/en/  
(2) git clone this project.  
(3) Execute following commands.

```sh
$ cd js-test-sample
$ npm install
$ gulp karma
```

You can get jasmine report on cui and coverage report in the coverage/**/index.html .  


# How to make this project

(1) install NodeJS.  
https://nodejs.org/en/  
  
(2) Execute following commands.

```sh
$ mkdir js-test-sample
$ cd js-test-sample
$ npm install -g gulp karma
$ npm install gulp gulp-util karma gulp-karma jasmine sinon phantomjs karma-jasmine karma-sinon phantomjs-prebuilt karma-phantomjs-launcher --save-dev
$ npm install karma-spec-reporter karma-coverage --save-dev
$ npm init
  > all Enter
$ karma init

Which testing framework do you want to use ?
Press tab to list possible options. Enter to move to the next question.
> jasmine

Do you want to use Require.js ?
This will add Require.js plugin.
Press tab to list possible options. Enter to move to the next question.
> no

Do you want to capture any browsers automatically ?
Press tab to list possible options. Enter empty string to move to the next quest
ion.
> PhantomJS
>

What is the location of your source and test files ?
You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".
Enter empty string to move to the next question.
>

Should any of the files included by the previous patterns be excluded ?
You can use glob patterns, eg. "**/*.swp".
Enter empty string to move to the next question.
>

Do you want Karma to watch all the files and run the tests on change ?
Press tab to list possible options.
> yes


Config file generated at "C:\workspace2\js-test-sample\karma.conf.js".
```

(3) Make and edit the gulpfile.js.  

* gulpfile.js
```javascript
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
```

(4) Develop app.js for sample.  

* app/js/app.js (sample javascript code)
```javascript
var calc = {
  add: function(x, y) {
    return x + y;
  }
}
```

(5) Develop appSepc.js for test.  

* app/spec/appSpec.js (sample test code)
```javascript
describe('test for add function', function() {

    it('1 + 1 = 2', function() {
        expect(calc.add(1, 1)).toBe(2);
    });

    it('1 + 4 = 5', function() {
        expect(calc.add(1, 4)).toBe(5);
    });

    it('1 + 4 = 10 with Sinon Stub', function() {
        var calcStub = sinon.stub(calc, "add");
        calcStub.returns(10);
        
        expect(calc.add(1, 4)).toBe(10);
    });
    
});
```

(6) Edit karma.conf.js for karma settings.

```javascript
// Karma configuration

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'sinon'],


    // list of files / patterns to load in the browser
    files: [
      'app/js/**/*.js',
      'app/spec/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/js/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],
    
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
```

(7) Execute following command.

```sh
$ gulp karma
```

You can get jasmine report on cui and coverage report in the coverage/**/index.html .