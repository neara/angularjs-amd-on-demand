/**
 *  Main module - kick starts asynchronous module loading and manual angular bootstrap
 */
(function (require) {
    "use strict";

    require.config({
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
            angular: {
                exports: 'angular'
            },
            'angular-route': [
                'angular'
            ],
            'angular-sanitize': [
                'angular'
            ],
            'angular-animate': [
                'angular'
            ],
            'angular-messages': [
                'angular'
            ],
            'angular-mocks': {
                deps: [
                    'angular'
                ],
                exports: 'angular.mock'
            },
            underscore: {
                exports: '_'
            }
        },
        priority: [
            'angular'
        ],
        packages: [
    
        ]
    });

    //http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
    window.name = 'NG_DEFER_BOOTSTRAP!';

    require([
        'jQuery',
        'utils/common',
        'angular',
        'angular-route',
        'angular-sanitize',
        'angular-animate',
        'angular-messages',
        'app'
    ], function (jQuery, utils, angular, routes, sanitize, animate, msgs, app) {
        window.jQuery = jQuery;
        angular.element().ready(function () {
            angular.resumeBootstrap([app.name]);
        });
    });

}(require));