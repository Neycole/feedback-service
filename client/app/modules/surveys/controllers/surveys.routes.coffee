'use strict';
angular.module 'fs.module.surveys'
.config ($stateProvider, $urlRouterProvider) ->
  $stateProvider
  .state 'surveys',
    url: '/surveys'
    templateUrl: 'modules/surveys/views/index.html'
    controller: 'SurveysController'
  .state 'newSurvey',
    url: '/surveys/new'
    templateUrl: 'modules/surveys/views/new.html'
    controller: 'NewSurveyController'
  .state 'editSurvey',
    url: '/surveys/edit/:id'
    templateUrl: 'modules/surveys/views/edit.html'
    controller: 'EditSurveyController'