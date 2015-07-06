'use strict';
###*
  * @ngdoc overview
  * @name fs.module.dashboard
  * @module
  * @description
  * @requires FeedbackServiceApp
  *
  * The `fs.module.dashboard` module provides services for interacting with
  * the dashboard model exposed via the REST API.
  *
###
module = angular.module 'fs.module.dashboard', [
  'ui.router'
]