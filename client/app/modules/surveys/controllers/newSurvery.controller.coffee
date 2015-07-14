'use strict';
module = angular.module 'fs.module.surveys'

###*
  * @ngdoc function
  * @name fs.module.surveys.controller:NewSurveysController
  * @description
  * # NewSurveysController
  * Controller of the surveys index
###
module.controller 'NewSurveyController', ($scope, $location, SurveysService) ->

    $scope.save = ->
        SurveysService.create($scope.survey)
        .then ->
          $location.path( '/surveys' );
        .catch (res) ->
          console.log 'error'
            