app = angular.module 'FeedbackServiceApp', [
  'fs.module.surveys'
]

app.config ($stateProvider, $urlRouterProvider) ->
  ###
  .state 'dashboard',
    url: '/'
    templateUrl: 'modules/dashboard/views/index.html'
    controller: 'DashboardController'
  ###

app.run ($rootScope) ->
  $rootScope.apiUrl = '/api';