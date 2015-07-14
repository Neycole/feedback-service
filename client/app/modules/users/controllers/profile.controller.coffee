'use strict';
module = angular.module 'fs.module.users'

###*
  * @ngdoc function
  * @name fs.module.users.controller:ProfileController
  * @description
  * # ProfileController
  * Controller of the users index
###
module.controller 'ProfileController', ($scope) ->
  $scope.user = []