'use strict';
module = angular.module 'fs.module.surveys'

###*
  * @ngdoc function
  * @name fs.module.surveys.controller:SurveysController
  * @description
  * # SurveysController
  * Controller of the surveys index
###
module.controller 'SurveysController', ($scope, SurveysService) ->

    options = 
        filter: 
            include:
                questions: 'answers'

    $scope.list = ->
      SurveysService.list()
          .then (data) ->
            $scope.surveys = data

    $scope.deleteSurvey = (survey) ->
      SurveysService.delete survey
          .then (data) ->
            $scope.list()

    $scope.list()