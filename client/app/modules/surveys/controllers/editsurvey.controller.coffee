'use strict';
module = angular.module 'fs.module.surveys'

###*
  * @ngdoc function
  * @name fs.module.surveys.controller:EditSurveyController
  * @description
  * # EditSurveyController
  * Controller of the editsurvey index
###
module.controller 'EditSurveyController', ($scope, $state, SurveysService) ->
 
  options = 
    filter: 
        include:
            questions: 'answers'

  SurveysService.get($state.params.id, options)
    .then (data) ->
        $scope.survey = data
        console.log(data)

    $scope.save = ->
        Surveys.Service.update($scope.survey)