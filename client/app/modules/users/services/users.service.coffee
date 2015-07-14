'use strict';
module = angular.module 'fs.module.users'

module.service 'ProfileService', ($rootScope, $resource) ->
    resource = $resource 'http://46.101.190.61:3001/api/users/:id', {id: '@id', access_token: $rootScope.accessToken},
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
        update: (user) ->
            resource.update(user).$promise
        create: (user) ->
            resource.create(user).$promise