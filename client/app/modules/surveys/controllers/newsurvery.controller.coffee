'use strict';
module = angular.module 'fs.module.surveys'

###*
  * @ngdoc function
  * @name fs.module.surveys.controller:NewSurveysController
  * @description
  * # NewSurveysController
  * Controller of the surveys index
###
module.controller 'NewSurveyController', ($scope, SurveysService) ->

    SurveysService.list()
    .then (data) ->
        $scope.surveys = data