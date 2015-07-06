(function() {
  var app;

  app = angular.module('FeedbackServiceApp', ['fs.module.dashboard', 'fs.module.surveys']);

  app.config(function($stateProvider, $urlRouterProvider) {

    /*
    .state 'dashboard',
      url: '/'
      templateUrl: 'modules/dashboard/views/index.html'
      controller: 'DashboardController'
     */
  });

  app.run(function($rootScope) {
    return $rootScope.apiUrl = '/api';
  });

}).call(this);

(function() {
  'use strict';

  /**
    * @ngdoc overview
    * @name fs.module.dashboard
    * @module
    * @description
    * @requires FeedbackServiceApp
    *
    * The `fs.module.dashboard` module provides services for interacting with
    * the dashboard model exposed via the REST API.
    *
   */
  var module;

  module = angular.module('fs.module.dashboard', ['ui.router']);

}).call(this);

(function() {
  'use strict';
  var module;

  module = angular.module('fs.module.dashboard');


  /**
    * @ngdoc function
    * @name fs.module.dashboard.controller:DashboardController
    * @description
    * # DashboardController
    * Controller of the dashboard index
   */

  module.controller('DashboardController', function($scope) {
    return $scope.surveys = [];
  });

}).call(this);

(function() {
  'use strict';
  angular.module('fs.module.dashboard').config(function($stateProvider, $urlRouterProvider) {
    return $stateProvider.state('dashboard', {
      url: '/dashboard',
      templateUrl: 'modules/dashboard/views/index.html',
      controller: 'DashboardController'
    });
  });

}).call(this);

(function() {
  'use strict';

  /**
    * @ngdoc overview
    * @name fs.module.surveys
    * @module
    * @description
    * @requires FeedbackServiceApp
    *
    * The `fs.module.surveys` module provides services for interacting with
    * the surveys model exposed via the REST API.
    *
   */
  var module;

  module = angular.module('fs.module.surveys', ['ui.router']);

}).call(this);

(function() {
  'use strict';
  var module;

  module = angular.module('fs.module.surveys');


  /**
    * @ngdoc function
    * @name fs.module.surveys.controller:SurveysController
    * @description
    * # SurveysController
    * Controller of the surveys index
   */

  module.controller('SurveysController', function($scope) {
    return $scope.surveys = [
      {
        name: 'Test',
        user: 'bla',
        createdAt: '02.05.2015',
        expires: true,
        expiresAt: '01.01.2016'
      }, {
        name: 'Test',
        user: 'bla',
        createdAt: '02.05.2015',
        expires: true,
        expiresAt: '01.01.2016'
      }, {
        name: 'Test',
        user: 'bla',
        createdAt: '02.05.2015',
        expires: true,
        expiresAt: '01.01.2016'
      }, {
        name: 'Test',
        user: 'bla',
        createdAt: '02.05.2015',
        expires: true,
        expiresAt: '01.01.2016'
      }, {
        name: 'Test',
        user: 'bla',
        createdAt: '02.05.2015',
        expires: true,
        expiresAt: '01.01.2016'
      }
    ];
  });

}).call(this);

(function() {
  'use strict';
  angular.module('fs.module.surveys').config(function($stateProvider, $urlRouterProvider) {
    return $stateProvider.state('surveys', {
      url: '/surveys',
      templateUrl: 'modules/surveys/views/index.html',
      controller: 'SurveysController'
    });
  });

}).call(this);
