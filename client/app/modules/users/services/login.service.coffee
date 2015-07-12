'use strict';
module = angular.module 'fs.module.users'

module.service 'LoginService', ($resource) ->
    resource = $resource 'http://46.101.190.61:3001/api/users/login', {},
        auth:
            method: 'POST'

    service =
        auth: (credentials) ->
            resource.auth(credentials).$promise