'use strict';
module = angular.module 'fs.module.surveys'

module.service 'AnswersService', ($rootScope, $resource) ->
    resource = $resource 'http://46.101.190.61:3001/api/questions/:questionId/answers/:id',
      {questionId: '@questionId', id: '@id', access_token: $rootScope.accessToken},
        create:
            method: 'POST'
        update:
            method: 'PUT'
        delete:
            method: 'DELETE'
    service =
        update: (answer) ->
            resource.update(answer).$promise
        create: (answer) ->
            resource.create(answer).$promise
        delete: (answer) ->
            resource.delete(answer).$promise