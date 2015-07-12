'use strict';
module = angular.module 'fs.module.dashboard'

###*
  * @ngdoc function
  * @name fs.module.dashboard.controller:DashboardController
  * @description
  * # DashboardController
  * Controller of the dashboard index
###
module.controller 'DashboardController', ($scope, $rootScope) ->

  $scope.surveys = []