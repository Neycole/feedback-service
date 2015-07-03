'use strict';

module.exports = function(app) {

    createDefaultUsers();

    function createDefaultUsers() {

        console.log('Creating roles and users');

        var User = app.models.User;
        var Role = app.models.Role;
        var RoleMapping = app.models.RoleMapping;
        var Survey = app.models.Survey;

        var users = [];
        var roles = [{
            name: 'admin',
            users: [{
                email: 'j.doe@example.com',
                password: 'notasecret'
            }]
        }, {
            name: 'users',
            users: [{
                email: 'user@user.com',
                password: 'user'
            }]
        }];
        var surveys = [
            {
                name: 'Satisfaction',
                createdAt: '',
                expires: false,
                questions: [
                    {
                        text: 'Do you like this?',
                        order: 0,
                        type: 'choice',
                        answers: [
                            {
                                text: 'Yes',
                                order: 0
                            },
                            {
                                text: 'No',
                                order: 1
                            }
                        ]
                    }
                ]
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
                            });
                    });
                });
        });

        surveys.forEach(function(survey) {
            Survey.findOrCreate(
                {where: {name: survey.name}},
                survey,
                function(err, createdSurvey, created) {

                }
            );
        });
        return users;
    }

};