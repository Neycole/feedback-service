'use strict';
module = angular.module 'fs.module.user'

###*
  * @ngdoc function
  * @name fs.module.user.controller:UserController
  * @description
  * # UserController
  * Controller of the user index
###
module.controller 'UserController', ($scope) ->
  $scope.surveys = []