/**
 * Application level configuration
 */

(function (define) {
    "use strict";

    var dependencies = ['angular', 'utils/LogDecorator', 'utils/LogExporter', 'RouteManager', 'services/DependencyResolver'];

    define(dependencies, function (angular, LogDecorator, $log, RouteManager, dependencyResolver)/*invoke*/ {
        /**
         * @ngdoc overview
         * @name angularAmdApp
         * @description
         * # angularAmdApp
         *
         * Main module of the application.
         */

        $log.debug('init app');
        var app = angular
            .module('angularAmdApp',['ngRoute']);

        app
            .config([
                '$routeProvider',
                '$locationProvider',
                '$controllerProvider',
                '$compileProvider',
                '$filterProvider',
                '$provide',
                function ($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
                    app.controller = $controllerProvider.register;
                    app.directive = $compileProvider.directive;
                    app.filter = $filterProvider.register;
                    app.factory = $provide.factory;
                    app.service = $provide.service;

                    $locationProvider.html5Mode(true);

                    if (RouteManager.routes !== undefined) {
                        angular.forEach(RouteManager.routes, function (route, path) {
                            $routeProvider.when(path, {
                                templateUrl: route.templateUrl,
                                resolve: dependencyResolver(route.dependencies)
                            });
                        });
                    }

                    if (RouteManager.defaultRoutePath !== undefined) {
                        $routeProvider.otherwise({redirectTo: RouteManager.defaultRoutePath});
                    }
                }
            ])
            .config(LogDecorator);

        return app;
    });

}(define));