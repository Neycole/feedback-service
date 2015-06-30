'use strict';

/**
 * @ngdoc overview
 * @name feedbackServiceApp
 * @description
 * # feedbackServiceApp
 *
 * Main module of the application.
 */
angular
  .module('feedbackServiceApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/surveys', {
        templateUrl: 'views/surveys.html',
        controller: 'SurveysIndexController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
