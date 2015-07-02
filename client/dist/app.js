(function() {
  var app;

  app = angular.module('FeedbackServiceApp', ['fs.module.surveys']);

  app.config(function($stateProvider, $urlRouterProvider) {

    /*
    .state 'dashboard',
      url: '/'
      templateUrl: 'modules/dashboard/views/index.html'
      controller: 'DashboardController'
     */
  });

  app.run(function($rootScope) {
    return $rootScope.apiUrl = '/api';
  });

}).call(this);

(function() {
  'use strict';

  /**
    * @ngdoc overview
    * @name fs.module.surveys
    * @module
    * @description
    * @requires FeedbackServiceApp
    *
    * The `fs.module.surveys` module provides services for interacting with
    * the surveys model exposed via the REST API.
    *
   */
  var module;

  module = angular.module('fs.module.surveys', ['ui.router']);

}).call(this);

(function() {
  'use strict';
  var module;

  module = angular.module('fs.module.surveys');


  /**
    * @ngdoc function
    * @name fs.module.surveys.controller:SurveysController
    * @description
    * # SurveysController
    * Controller of the surveys index
   */

  module.controller('SurveysController', function($scope) {
    return $scope.surveys = [];
  });

}).call(this);

(function() {
  'use strict';
  angular.module('fs.module.surveys').config(function($stateProvider, $urlRouterProvider) {
    return $stateProvider.state('surveys', {
      url: '/surveys',
      templateUrl: 'modules/surveys/views/index.html',
      controller: 'SurveysController'
    });
  });

}).call(this);
