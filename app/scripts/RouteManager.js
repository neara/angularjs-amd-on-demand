/**
 * RouteManager
 * defines routes and controllers
 *
 * Created by anatr on 1/18/15.
 */


(function(define) {
    "use strict";
    define(
        ['utils/LogExporter'],
        function ($log) {
            $log.debug('Configuring routes');
            return {
                defaultRoutePath: '/',
                routes: {
                    '/': {
                        templateUrl: 'views/main.html',
                        dependencies: [
                            'controllers/HomeViewController'
                        ]
                    },
                    '/about': {
                        templateUrl: 'views/about.html',
                        dependencies: [
                            'controllers/about'
                        ]
                    }
                }
            };
            //var RouteManager = function ($routeProvider) {
            //    $log.debug( "Configuring $routeProvider...");
            //
            //    $routeProvider
            //        .when('/', {
            //            templateUrl: 'views/main.html',
            //            controller: 'MainCtrl'
            //        })
            //        .when('/about', {
            //            templateUrl: 'views/about.html',
            //            controller: 'AboutCtrl'
            //        })
            //        .otherwise({
            //            redirectTo: '/'
            //        });
            //};
            //
            //return ["$routeProvider", RouteManager ];
        }
    );
}(define));