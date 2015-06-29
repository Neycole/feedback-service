'use strict';

/**
 * @ngdoc function
 * @name feedbackServiceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the feedbackServiceApp
 */
angular.module('feedbackServiceApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
