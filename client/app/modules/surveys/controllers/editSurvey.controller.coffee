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
        

  $scope.addQuestion = ->
    $scope.survey.questions[$scope.survey.questions.length] =
        answers: []
        multiple: false
        order: 0
        text: ""
        type: "choice"

  $scope.addAnswer = (index) ->
    $scope.survey.questions[index].answers[$scope.survey.questions[index].answers.length] =
        order: 0
        text: ""

  $scope.save = ->
    SurveysService.update($scope.survey)
    $scope.survey.questions.forEach (question) ->
        QuestionService.update(question)
        question.answers.forEach (answer) ->
            #answer.name = answer.text
            #AnswersService.update (answer)