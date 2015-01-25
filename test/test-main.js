var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    // Removed "Spec" naming from files
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app/scripts',

    paths: {
            jQuery: '../../bower_components/jquery/dist/jquery',
            angular: '../../bower_components/angular/angular',
            'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
            'angular-route': '../../bower_components/angular-route/angular-route',
            'angular-scenario': '../../bower_components/angular-scenario/angular-scenario',
            bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
            utils: '../scripts/utils',
            services: '../scripts/services',
            controllers: '../scripts/controllers',
            underscore: '../../bower_components/underscore/underscore',
            'angular-animate': '../../bower_components/angular-animate/angular-animate',
            'angular-messages': '../../bower_components/angular-messages/angular-messages',
            'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize'
        },

    shim: {
        'angular' : {'exports' : 'angular'},
        'angular-route': ['angular'],
        'angular-sanitize': ['angular'],
        'angular-animate': ['angular'],
        'angular-mocks': {
          deps:['angular'],
          'exports':'angular.mock'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
