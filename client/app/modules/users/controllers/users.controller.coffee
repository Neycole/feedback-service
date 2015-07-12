'use strict';
module = angular.module 'fs.module.users'

###*
  * @ngdoc function
  * @name fs.module.users.controller:UsersController
  * @description
  * # UsersController
  * Controller of the users index
###
module.controller 'UsersController', ($scope) ->
  $scope.users = []