'use strict';
###*
  * @ngdoc overview
  * @name fs.module.user
  * @module
  * @description
  * @requires FeedbackServiceApp
  *
  * The `fs.module.user` module provides services for interacting with
  * the user model exposed via the REST API.
  *
###
module = angular.module 'fs.module.user', [
  'ui.router'
]