'use strict';

module.exports = function(app) {

    createDefaultUsers();

    function createDefaultUsers() {

        console.log('Creating roles and users');

        var User = app.models.user,
            Role = app.models.Role,
            RoleMapping = app.models.RoleMapping,
            Survey = app.models.Survey,
            Question = app.models.Question,
            Answer = app.models.Answer,
            moment = require('moment'),
            surveysCreated = false,
            users = [],
            roles = [{
                name: 'admin',
                users: [{
                    email: 'j.doe@example.com',
                    password: 'notasecret'
                }]},
                {
                    name: 'users',
                    users: [{
                        email: 'user@user.com',
                        password: 'user'
                    }]
                }],
            surveys = [
                {
                    name: 'Satisfaction'
                }
            ],
            question = {
                text: 'Do you like this?',
                order: 0,
                type: 'choice'
            },
            answers = [
                {
                    text: 'Yes',
                    order: 0
                },
                {
                    text: 'No',
                    order: 1
                }
            ];

        roles.forEach(function(role) {
            Role.findOrCreate(
                {where: {name: role.name}}, // find
                {name: role.name}, // create
                function(err, createdRole, created) {
                    if (err) {
                        console.error('error running findOrCreate('+role.name+')', err);
                    }
                    (created) ? console.log('created role', createdRole.name)
                        : console.log('found role', createdRole.name);
                    role.users.forEach(function(roleUser) {
                        User.findOrCreate(
                            {where: {username: roleUser.username}}, // find
                            roleUser, // create
                            function(err, createdUser, created) {
                                if (err) {
                                    console.error('error creating roleUser', err);
                                }
                                (created) ? console.log('created user', createdUser.username)
                                    : console.log('found user', createdUser.username);
                                createdRole.principals.create({
                                    principalType: RoleMapping.USER,
                                    principalId: createdUser.id
                                }, function(err, rolePrincipal) {
                                    if (err) {
                                        console.error('error creating rolePrincipal', err);
                                    }
                                    users.push(createdUser);
                                });

                                if (!surveysCreated) {
                                    // create surveys
                                    surveys.forEach(function (survey) {
                                        survey.userId = createdUser.id;
                                        Survey.findOrCreate(
                                            {where: {name: survey.name}},
                                            survey,
                                            function (err, createdSurvey, created) {
                                                console.log('created survey', createdSurvey.name);

                                                // Create question
                                                question.surveyId = createdSurvey.id;
                                                Question.findOrCreate(
                                                    {where: {text: question.text}},
                                                    question,
                                                    function(err, createdQuestion, created) {
                                                        console.log('created question', createdQuestion.text);

                                                        // Create answer
                                                        answers.forEach(function(answer) {
                                                            answer.questionId = createdQuestion.id;
                                                            Answer.findOrCreate(
                                                                {where: {text: answer.text}},
                                                                answer,
                                                                function(err, createdAnswer, created) {
                                                                    console.log('created answer', createdAnswer.text);
                                                                }
                                                            );
                                                        });
                                                    }
                                                );
                                            }
                                        );
                                    });
                                }
                                surveysCreated = true;
                            });
                    });
                });
        });
        return users;
    }

};