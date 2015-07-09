'use strict';
angular.module 'fs.module.profile'
.config ($stateProvider, $urlRouterProvider) ->
  $stateProvider
  .state 'profile',
    url: '/profile'
    templateUrl: 'modules/profile/views/index.html'
    controller: 'ProfileController'