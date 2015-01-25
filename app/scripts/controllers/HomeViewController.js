define(['app'], function (app) {
  'use strict';

  /**
   * @ngdoc function
   * @name HomeViewController
   * @description
   * # MainCtrl
   * Controller of the angularAmdApp
   */
  app.controller('HomeViewController',['$scope', '$log', function ($scope, $log) {
      $log = $log.getInstance('HomeViewController');
      $log.debug('init');

      $scope.app = 'AngularAmdApp';
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }]);
});
