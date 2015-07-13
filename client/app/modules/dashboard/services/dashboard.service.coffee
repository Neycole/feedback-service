'use strict';
module = angular.module 'fs.module.dashboard'

module.service 'DashboardService', ($rootScope, $resource) ->
    resource = $resource 'http://46.101.190.61:3001/api/users/:uid/surveys/:id',
      {uid: $rootScope.userId, id: '@id', access_token: $rootScope.accessToken},
        create:
            method: 'POST'
        update:
            method: 'PUT'

    service =
        list: ->
            resource.query().$promise
        get: (id, options = {}) ->
            options.id = id
            resource.get(options).$promise
        #update: (survey) ->
        #   resource.update(survey).$promise
        #create: (survey) ->
        #   resource.create(survey).$promise