'use strict';
module = angular.module 'fs.module.users'

###*
  * @ngdoc function
  * @name fs.module.users.controller:LoginController
  * @description
  * # LoginController
  * Controller of the login index
###
module.controller 'LoginController', ($scope, $location, $rootScope, LoginService) ->
  $scope.login = ->
    LoginService.auth({email: $scope.email, password: $scope.password})
      .then (data) ->
        $rootScope.accessToken = data.id
        $rootScope.userId = data.userId

        $location.path( '/dashboard' );
