'use strict';

/**
 * @ngdoc function
 * @name feedbackServiceApp.controller:SurveysIndexController
 * @description
 * # SurveysIndexController
 * Controller of the feedbackServiceApp
 */
angular.module('feedbackServiceApp')
  .controller('SurveysIndexController', function ($scope) {
    $scope.surveys = [
      {
        name: 'My first survey',
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        expires: false,
        expiresAt: null
      }
    ];
  });
