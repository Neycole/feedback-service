'use strict';
angular.module 'fs.module.surveys'
.config ($stateProvider, $urlRouterProvider) ->
  $stateProvider
  .state 'surveys',
    url: '/surveys'
    templateUrl: 'modules/surveys/views/index.html'
    controller: 'SurveysController'