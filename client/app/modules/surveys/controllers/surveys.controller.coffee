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
  $scope.surveys = [
    {name: 'Test', user: 'bla', createdAt: '02.05.2015', expires: true, expiresAt: '01.01.2016'}
    {name: 'Test', user: 'bla', createdAt: '02.05.2015', expires: true, expiresAt: '01.01.2016'}
    {name: 'Test', user: 'bla', createdAt: '02.05.2015', expires: true, expiresAt: '01.01.2016'}
    {name: 'Test', user: 'bla', createdAt: '02.05.2015', expires: true, expiresAt: '01.01.2016'}
    {name: 'Test', user: 'bla', createdAt: '02.05.2015', expires: true, expiresAt: '01.01.2016'}
]