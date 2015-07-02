'use strict';
###*
  * @ngdoc overview
  * @name fs.module.surveys
  * @module
  * @description
  * @requires FeedbackServiceApp
  *
  * The `fs.module.surveys` module provides services for interacting with
  * the surveys model exposed via the REST API.
  *
###
module = angular.module 'fs.module.surveys', [
  'ui.router'
]