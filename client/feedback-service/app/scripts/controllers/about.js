'use strict';

/**
 * @ngdoc function
 * @name feedbackServiceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the feedbackServiceApp
 */
angular.module('feedbackServiceApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
