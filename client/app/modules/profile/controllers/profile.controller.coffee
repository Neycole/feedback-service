'use strict';
module = angular.module 'fs.module.profile'

###*
  * @ngdoc function
  * @name fs.module.profile.controller:ProfileController
  * @description
  * # ProfileController
  * Controller of the profile index
###
module.controller 'ProfileController', ($scope) ->
  $scope.surveys = []