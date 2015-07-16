(function() {
  var app;

  app = angular.module('FeedbackServiceApp', ['ngResource', 'fs.module.dashboard', 'fs.module.surveys', 'fs.module.logout', 'fs.module.users']);

  app.config(function($stateProvider, $urlRouterProvider) {

    /*
    .state 'dashboard',
      url: '/'
      templateUrl: 'modules/dashboard/views/index.html'
      controller: 'DashboardController'
     */
  });

  app.run(function($location, $rootScope) {
    $rootScope.apiUrl = '/api';
    $rootScope.accessToken = "8Ojlw4jaMUGJ0nUDdFst2dG7vGiojycsu5uF6bNNu8fbeKB2k1Sb00WF3h4SUMwY";
    $rootScope.userId = "559e48d16a17bbf9484887c6";
    if (!$rootScope.userId) {
      return $location.path('/login');
    }
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

  module.controller('DashboardController', function($scope, SurveysService) {
    return SurveysService.list().then(function(data) {
      return $scope.surveys = data;
    });
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
  var module;

  module = angular.module('fs.module.dashboard');

  module.service('DashboardService', function($rootScope, $resource) {
    var resource, service;
    resource = $resource('http://46.101.190.61:3001/api/users/:uid/surveys/:id', {
      uid: $rootScope.userId,
      id: '@id',
      access_token: $rootScope.accessToken
    }, {
      create: {
        method: 'POST'
      },
      update: {
        method: 'PUT'
      }
    });
    return service = {
      list: function() {
        return resource.query().$promise;
      },
      get: function(id, options) {
        if (options == null) {
          options = {};
        }
        options.id = id;
        return resource.get(options).$promise;
      }
    };
  });

}).call(this);

(function() {
  'use strict';

  /**
    * @ngdoc overview
    * @name fs.module.logout
    * @module
    * @description
    * @requires FeedbackServiceApp
    *
    * The `fs.module.logout` module provides services for interacting with
    * the logout model exposed via the REST API.
    *
   */
  var module;

  module = angular.module('fs.module.logout', ['ui.router']);

}).call(this);

(function() {
  'use strict';
  var module;

  module = angular.module('fs.module.logout');


  /**
    * @ngdoc function
    * @name fs.module.logout.controller:LogoutController
    * @description
    * # LogoutController
    * Controller of the logout index
   */

  module.controller('LogoutController', function($scope) {
    return $scope.surveys = [];
  });

}).call(this);

(function() {
  'use strict';
  angular.module('fs.module.logout').config(function($stateProvider, $urlRouterProvider) {
    return $stateProvider.state('logout', {
      url: '/logout',
      templateUrl: 'modules/logout/views/index.html',
      controller: 'LogoutController'
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
    * @name fs.module.surveys.controller:EditSurveyController
    * @description
    * # EditSurveyController
    * Controller of the editsurvey index
   */

  module.controller('EditSurveyController', function($scope, $state, SurveysService, QuestionService, AnswersService) {
    var options;
    options = {
      filter: {
        include: {
          questions: 'answers'
        }
      }
    };
    SurveysService.get($state.params.id, options).then(function(data) {
      return $scope.survey = data;
    });
    $scope.newAnswer = {};
    $scope.newQuestion = {};
    $scope.questionTypes = ['choice', 'text'];
    $scope.addQuestion = function() {
      $scope.survey.questions.push({
        answers: [],
        multiple: $scope.newQuestion.multiple,
        order: $scope.newQuestion.order,
        text: $scope.newQuestion.text,
        type: $scope.newQuestion.type
      });
      $scope.newQuestion.multiple = "";
      $scope.newQuestion.order = 0;
      $scope.newQuestion.text = "";
      return $scope.newQuestion.type = "";
    };
    $scope.addAnswer = function(question) {
      question.answers[question.answers.length] = {
        order: $scope.newAnswer.order,
        text: $scope.newAnswer.text
      };
      $scope.newAnswer.order = "";
      return $scope.newAnswer.text = "";
    };
    return $scope.save = function() {
      SurveysService.update($scope.survey);
      return $scope.survey.questions.forEach(function(question) {
        QuestionService.update(question);
        return question.answers.forEach(function(answer) {});
      });
    };
  });

}).call(this);

(function() {
  'use strict';
  var module;

  module = angular.module('fs.module.surveys');


  /**
    * @ngdoc function
    * @name fs.module.surveys.controller:NewSurveysController
    * @description
    * # NewSurveysController
    * Controller of the surveys index
   */

  module.controller('NewSurveyController', function($scope, $location, SurveysService) {
    return $scope.save = function() {
      return SurveysService.create($scope.survey).then(function() {
        return $location.path('/surveys');
      })["catch"](function(res) {
        return console.log('error');
      });
    };
  });

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

  module.controller('SurveysController', function($scope, SurveysService) {
    return SurveysService.list().then(function(data) {
      return $scope.surveys = data;
    });
  });

}).call(this);

(function() {
  'use strict';
  angular.module('fs.module.surveys').config(function($stateProvider, $urlRouterProvider) {
    return $stateProvider.state('surveys', {
      url: '/surveys',
      templateUrl: 'modules/surveys/views/index.html',
      controller: 'SurveysController'
    }).state('newSurvey', {
      url: '/surveys/new',
      templateUrl: 'modules/surveys/views/new.html',
      controller: 'NewSurveyController'
    }).state('editSurvey', {
      url: '/surveys/edit/:id',
      templateUrl: 'modules/surveys/views/edit.html',
      controller: 'EditSurveyController'
    });
  });

}).call(this);

(function() {
  'use strict';
  var module;

  module = angular.module('fs.module.surveys');

  module.service('AnswersService', function($rootScope, $resource) {
    var resource, service;
    resource = $resource('http://46.101.190.61:3001/api/surveys/:sid/questions/:id', {
      id: '@id',
      sid: '@surveyId',
      access_token: $rootScope.accessToken
    }, {
      create: {
        method: 'POST'
      },
      update: {
        method: 'PUT'
      }
    });
    return service = {
      update: function(survey) {
        return resource.update(survey).$promise;
      },
      create: function(survey) {
        return resource.create(survey).$promise;
      }
    };
  });

}).call(this);

(function() {
  'use strict';
  var module;

  module = angular.module('fs.module.surveys');

  module.service('QuestionService', function($rootScope, $resource) {
    var resource, service;
    resource = $resource('http://46.101.190.61:3001/api/surveys/:sid/questions/:id', {
      id: '@id',
      sid: '@surveyId',
      access_token: $rootScope.accessToken
    }, {
      create: {
        method: 'POST'
      },
      update: {
        method: 'PUT'
      }
    });
    return service = {
      update: function(survey) {
        return resource.update(survey).$promise;
      },
      create: function(survey) {
        return resource.create(survey).$promise;
      }
    };
  });

}).call(this);

(function() {
  'use strict';
  var module;

  module = angular.module('fs.module.surveys');

  module.service('SurveysService', function($rootScope, $resource) {
    var detailedResource, resource, service;
    resource = $resource('http://46.101.190.61:3001/api/users/:uid/surveys/:id', {
      uid: $rootScope.userId,
      id: '@id',
      access_token: $rootScope.accessToken
    }, {
      create: {
        method: 'POST'
      },
      update: {
        method: 'PUT'
      }
    });
    detailedResource = $resource('http://46.101.190.61:3001/api/surveys/:id', {
      uid: $rootScope.userId,
      id: '@id',
      access_token: $rootScope.accessToken
    });
    return service = {
      list: function() {
        return resource.query().$promise;
      },
      get: function(id, options) {
        if (options == null) {
          options = {};
        }
        options.id = id;
        return resource.get(options).$promise.then(function(data) {
          return detailedResource.get(options).$promise;
        });
      },
      update: function(survey) {
        return resource.update(survey).$promise;
      },
      create: function(survey) {
        return resource.create(survey).$promise;
      }
    };
  });

}).call(this);

(function() {
  'use strict';

  /**
    * @ngdoc overview
    * @name fs.module.users
    * @module
    * @description
    * @requires FeedbackServiceApp
    *
    * The `fs.module.users` module provides services for interacting with
    * the users model exposed via the REST API.
    *
   */
  var module;

  module = angular.module('fs.module.users', ['ui.router']);

}).call(this);

(function() {
  'use strict';
  var module;

  module = angular.module('fs.module.users');


  /**
    * @ngdoc function
    * @name fs.module.users.controller:LoginController
    * @description
    * # LoginController
    * Controller of the login index
   */

  module.controller('LoginController', function($scope, $location, $rootScope, LoginService) {
    return $scope.login = function() {
      return LoginService.auth({
        email: $scope.email,
        password: $scope.password
      }).then(function(data) {
        $rootScope.accessToken = data.id;
        $rootScope.userId = data.userId;
        return $location.path('/dashboard');
      });
    };
  });

}).call(this);

(function() {
  'use strict';
  var module;

  module = angular.module('fs.module.users');


  /**
    * @ngdoc function
    * @name fs.module.users.controller:ProfileController
    * @description
    * # ProfileController
    * Controller of the users index
   */

  module.controller('ProfileController', function($scope) {
    return $scope.user = [];
  });

}).call(this);

(function() {
  'use strict';
  var module;

  module = angular.module('fs.module.users');


  /**
    * @ngdoc function
    * @name fs.module.users.controller:UsersController
    * @description
    * # UsersController
    * Controller of the users index
   */

  module.controller('UsersController', function($scope) {
    return $scope.users = [];
  });

}).call(this);

(function() {
  'use strict';
  angular.module('fs.module.users').config(function($stateProvider, $urlRouterProvider) {
    return $stateProvider.state('users', {
      url: '/users',
      templateUrl: 'modules/users/views/index.html',
      controller: 'UsersController'
    }).state('profile', {
      url: '/profile',
      templateUrl: 'modules/users/views/profile.html',
      controller: 'ProfileController'
    }).state('login', {
      url: '/login',
      templateUrl: 'modules/users/views/login.html',
      controller: 'LoginController'
    });
  });

}).call(this);

(function() {
  'use strict';
  var module;

  module = angular.module('fs.module.users');

  module.service('LoginService', function($resource) {
    var resource, service;
    resource = $resource('http://46.101.190.61:3001/api/users/login', {}, {
      auth: {
        method: 'POST'
      }
    });
    return service = {
      auth: function(credentials) {
        return resource.auth(credentials).$promise;
      }
    };
  });

}).call(this);

(function() {
  'use strict';
  var module;

  module = angular.module('fs.module.users');

  module.service('ProfileService', function($rootScope, $resource) {
    var resource, service;
    resource = $resource('http://46.101.190.61:3001/api/users/:id', {
      id: '@id',
      access_token: $rootScope.accessToken
    }, {
      create: {
        method: 'POST'
      },
      update: {
        method: 'PUT'
      }
    });
    return service = {
      list: function() {
        return resource.query().$promise;
      },
      get: function(id, options) {
        if (options == null) {
          options = {};
        }
        options.id = id;
        return resource.get(options).$promise;
      },
      update: function(user) {
        return resource.update(user).$promise;
      },
      create: function(user) {
        return resource.create(user).$promise;
      }
    };
  });

}).call(this);
