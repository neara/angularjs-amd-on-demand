(function(define, describe) {
    "use strict";

    define(['angular', 'angular-mocks', 'controllers/HomeViewController', 'angular-route'], function(angular, mocks, controller) {
        describe('The "HomeViewController"', function() {
            var $scope, ctrl, $rootScope;
            beforeEach(module('angularAmdApp'));
            beforeEach(inject(['$rootScope', '$controller', function(_$rootScope_, _$controller_) {
                    $rootScope = _$rootScope_;
                    $scope = $rootScope.$new();
                    //$controller = _$controller_;
                    ctrl = _$controller_('HomeViewController', {$scope: $scope});
                }])
            );

            it('should set app name to "angularAmdApp"', function() {
               expect($scope.app).toBe("AngularAmdApp");
            });
        });
    });

}(define, describe));