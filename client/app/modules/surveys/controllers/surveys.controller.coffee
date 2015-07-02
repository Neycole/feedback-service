'use strict';
module = angular.module 'fs.module.surveys'

###*
  * @ngdoc function
  * @name fs.module.surveys.controller:SurveysController
  * @description
  * # SurveysController
  * Controller of the surveys index
###
module.controller 'SurveysController', ($scope) ->
  $scope.surveys = []