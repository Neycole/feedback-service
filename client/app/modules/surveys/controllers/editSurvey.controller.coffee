'use strict';
module = angular.module 'fs.module.surveys'

###*
  * @ngdoc function
  * @name fs.module.surveys.controller:EditSurveyController
  * @description
  * # EditSurveyController
  * Controller of the editsurvey index
###
module.controller 'EditSurveyController', ($scope, $state, $location, SurveysService, QuestionsService, AnswersService) ->
 
  options = 
    filter: 
        include:
            questions: 'answers'

  $scope.getSurvey = (id, options) ->
    SurveysService.get(id, options)
    .then (data) ->
        $scope.survey = data

  $scope.getSurvey($state.params.id, options)

  $scope.newAnswer = {}
  $scope.newQuestion = {}

  $scope.questionTypes = [
      'choice'
      'text'
  ]

  $scope.save = ->
    SurveysService.update($scope.survey)
    $scope.survey.questions.forEach (question) ->
      QuestionsService.update(question)
      question.answers.forEach (answer) ->
        answer.questionId = question.id
        AnswersService.update (answer)

  $scope.deleteSurvey = (survey) ->
    SurveysService.delete survey
      .then (data) ->
        $location.path( '/surveys' )

  $scope.addQuestion = ->
    $scope.newQuestion.surveyId = $scope.survey.id
    QuestionsService.create($scope.newQuestion)
      .then (data) ->
        $scope.survey.questions.push data
        $scope.newQuestion.multiple = ""
        $scope.newQuestion.order = 0
        $scope.newQuestion.text = ""
        $scope.newQuestion.type = ""

  $scope.deleteQuestion = (question) ->
    QuestionsService.delete question
      .then (data) ->
        $scope.getSurvey($state.params.id, options)

  $scope.addAnswer = (question) ->
    $scope.newAnswer.questionId = question.id
    AnswersService.create($scope.newAnswer)
      .then (data) ->
        question.answers = [] if !question.answers
        question.answers.push data
        $scope.newAnswer.order = ""
        $scope.newAnswer.text = ""

  $scope.deleteAnswer = (answer) ->
    AnswersService.delete answer
      .then (data) ->
        $scope.getSurvey($state.params.id, options)
        