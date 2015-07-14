'use strict';
angular.module 'fs.module.logout'
.config ($stateProvider, $urlRouterProvider) ->
  $stateProvider
  .state 'logout',
    url: '/logout'
    templateUrl: 'modules/logout/views/index.html'
    controller: 'LogoutController'