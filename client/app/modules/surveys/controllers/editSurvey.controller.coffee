'use strict';
module = angular.module 'fs.module.surveys'

###*
  * @ngdoc function
  * @name fs.module.surveys.controller:EditSurveyController
  * @description
  * # EditSurveyController
  * Controller of the editsurvey index
###
module.controller 'EditSurveyController', ($scope, $state, SurveysService, QuestionService, AnswersService) ->
 
  options = 
    filter: 
        include:
            questions: 'answers'

  SurveysService.get($state.params.id, options)
    .then (data) ->
        $scope.survey = data

  $scope.newAnswer = {}
  $scope.newQuestion = {}

  $scope.questionTypes = [
      'choice'
      'text'
  ]

  $scope.addQuestion = ->
    $scope.survey.questions.push
        answers: []
        multiple: $scope.newQuestion.multiple
        order: $scope.newQuestion.order
        text: $scope.newQuestion.text
        type: $scope.newQuestion.type

    $scope.newQuestion.multiple = ""
    $scope.newQuestion.order = 0
    $scope.newQuestion.text = ""
    $scope.newQuestion.type = ""

  $scope.addAnswer = (question) ->
    question.answers[question.answers.length] =
        order: $scope.newAnswer.order
        text: $scope.newAnswer.text

    $scope.newAnswer.order = ""
    $scope.newAnswer.text = ""

  $scope.save = ->
    SurveysService.update($scope.survey)
    $scope.survey.questions.forEach (question) ->
        QuestionService.update(question)
        question.answers.forEach (answer) ->
            #answer.name = answer.text
            #AnswersService.update (answer)