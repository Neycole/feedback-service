'use strict';
module = angular.module 'fs.module.logout'

###*
  * @ngdoc function
  * @name fs.module.logout.controller:LogoutController
  * @description
  * # LogoutController
  * Controller of the logout index
###
module.controller 'LogoutController', ($scope) ->
  $scope.surveys = []