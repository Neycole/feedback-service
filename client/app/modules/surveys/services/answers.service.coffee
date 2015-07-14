'use strict';
module = angular.module 'fs.module.surveys'

module.service 'AnswersService', ($rootScope, $resource) ->
    resource = $resource 'http://46.101.190.61:3001/api/surveys/:sid/questions/:id',
      {id: '@id', sid: '@surveyId', access_token: $rootScope.accessToken},
        create:
            method: 'POST'
        update:
            method: 'PUT'

    service =
        update: (survey) ->
            resource.update(survey).$promise
        create: (survey) ->
            resource.create(survey).$promise