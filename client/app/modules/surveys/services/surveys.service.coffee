'use strict';
module = angular.module 'fs.module.surveys'

module.service 'SurveysService', ($rootScope, $resource) ->
    resource = $resource 'http://46.101.190.61:3001/api/users/:uid/surveys/:id',
      {uid: $rootScope.userId, id: '@id', access_token: $rootScope.accessToken},
        create:
            method: 'POST'
        update:
            method: 'PUT'
        delete: 
            method: 'DELETE'
    detailedResource = $resource 'http://46.101.190.61:3001/api/surveys/:id',
      {uid: $rootScope.userId, id: '@id', access_token: $rootScope.accessToken}

    service =
        list: ->
            resource.query().$promise
        get: (id, options = {}) ->
            options.id = id
            resource.get(options).$promise
                .then (data) ->
                    detailedResource.get(options).$promise
        update: (survey) ->
            resource.update(survey).$promise
        create: (survey) ->
            resource.create(survey).$promise
        delete: (survey) ->
            resource.delete(survey).$promise