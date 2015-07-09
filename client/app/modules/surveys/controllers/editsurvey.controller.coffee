'use strict';
module = angular.module 'fs.module.surveys'

###*
  * @ngdoc function
  * @name fs.module.surveys.controller:EditSurveyController
  * @description
  * # EditSurveyController
  * Controller of the editsurvey index
###
module.controller 'EditSurveyController', ($scope, SurveysService) ->
  
  SurveysService.get(123)
    .then (data) ->
        $scope.survey = data