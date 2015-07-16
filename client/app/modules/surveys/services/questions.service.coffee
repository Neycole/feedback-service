'use strict';
module = angular.module 'fs.module.surveys'

module.service 'QuestionsService', ($rootScope, $resource) ->
    resource = $resource 'http://46.101.190.61:3001/api/surveys/:surveyId/questions/:id',
      {id: '@id', surveyId: '@surveyId', access_token: $rootScope.accessToken},
        create:
            method: 'POST'
        update:
            method: 'PUT'
        delete:
            method: 'DELETE'

    service =
        update: (question) ->
            resource.update(question).$promise
        create: (question) ->
            resource.create(question).$promise
        delete: (question) ->
            resource.delete(question).$promise