/**
 * Created by anatr on 1/18/15.
 */

(function(define, require) {
    "use strict";

    define([], function () {
        return function (dependencies) {
            return {
                resolver: ['$q', '$rootScope', function ($q, $rootScope) {
                    var deferred = $q.defer();

                    require(dependencies, function () {
                        $rootScope.$apply(function () {
                            deferred.resolve();
                        });
                    });

                    return deferred.promise;
                }]
            };

        };
    });
}(define, require));