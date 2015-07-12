'use strict';
###*
  * @ngdoc overview
  * @name fs.module.users
  * @module
  * @description
  * @requires FeedbackServiceApp
  *
  * The `fs.module.users` module provides services for interacting with
  * the users model exposed via the REST API.
  *
###
module = angular.module 'fs.module.users', [
  'ui.router'
]