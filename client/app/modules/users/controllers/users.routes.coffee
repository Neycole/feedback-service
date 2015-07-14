'use strict';
angular.module 'fs.module.users'
.config ($stateProvider, $urlRouterProvider) ->
  $stateProvider
  .state 'users',
    url: '/users'
    templateUrl: 'modules/users/views/index.html'
    controller: 'UsersController'
  .state 'profile',
    url: '/profile'
    templateUrl: 'modules/users/views/profile.html'
    controller: 'ProfileController'
  .state 'login',
    url: '/login'
    templateUrl: 'modules/users/views/login.html'
    controller: 'LoginController'