'use strict';
angular.module 'fs.module.user'
.config ($stateProvider, $urlRouterProvider) ->
  $stateProvider
  .state 'user',
    url: '/user'
    templateUrl: 'modules/user/views/index.html'
    controller: 'UserController'