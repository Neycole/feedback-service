'use strict';
angular.module 'fs.module.dashboard'
.config ($stateProvider, $urlRouterProvider) ->
  $stateProvider
  .state 'dashboard',
    url: '/dashboard'
    templateUrl: 'modules/dashboard/views/index.html'
    controller: 'DashboardController'