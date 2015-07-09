'use strict';
module = angular.module 'fs.module.surveys'

module.service 'SurveysService', ($resource) ->
    resource = $resource 'http://46.101.190.61:3001/api/surveys', {id: '@id'},
        create:
            method: 'POST'
        update:
            method: 'PUT'

    service =
        list: ->
            resource.query().$promise
        get: (id) ->
            data = 
                id: id
            resource.get(data).$promise