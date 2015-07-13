app = angular.module 'FeedbackServiceApp', [
  'ngResource'
  'fs.module.dashboard'
  'fs.module.surveys'
  'fs.module.logout'
  'fs.module.users'
]

app.config ($stateProvider, $urlRouterProvider) ->
  ###
  .state 'dashboard',
    url: '/'
    templateUrl: 'modules/dashboard/views/index.html'
    controller: 'DashboardController'
  ###

app.run ($location, $rootScope) ->
  $rootScope.apiUrl = '/api'
  
  $rootScope.accessToken = "8Ojlw4jaMUGJ0nUDdFst2dG7vGiojycsu5uF6bNNu8fbeKB2k1Sb00WF3h4SUMwY"
  $rootScope.userId = "559e48d16a17bbf9484887c6"

  $location.path( '/login' ) if !$rootScope.userId