define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name angularAmdApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the angularAmdApp
   */
  angular.module('angularAmdApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
