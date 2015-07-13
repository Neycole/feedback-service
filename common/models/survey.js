module.exports = function(Survey) {
    Survey.vote = function(id, voting, cb) {
        var mongodb = require('mongodb'),
            query = {
                id: id
            },
            answers,
            chosenAnswer,
            newChosenAnswer;
        this.findOne({where: query}, function(err, survey) {
            if (!survey) return cb(null, false);

            // Iterate through voted questions
            Object.keys(voting).forEach(function(questionId) {
                answers = voting[questionId];
                survey.questions.findById(questionId, function(err, question) {
                    if (!question) return cb(null, false);

                    // iterate through voted answers
                    Object.keys(answers).forEach(function(answerId) {
                        question.answers.findById(answerId, function(err, answer) {
                            if (!answer) return cb(null, false);

                            // Update chosenAnswers
                            question.chosenAnswers({where: {answerId: mongodb.ObjectID(answerId)}}, function(err, chosenAnswers) {
                                var count = chosenAnswers.length ? chosenAnswers[0].count : 0;
                                count++;

                                if (chosenAnswers.length) {
                                    chosenAnswer = chosenAnswers[0];
                                    chosenAnswer.count = count;
                                    chosenAnswer.save({}, function(err, instance) {
                                        if (!err && instance) return cb(null, true);
                                    });
                                    return;
                                }
                                newChosenAnswer = {
                                    questionId: question.id,
                                    answerId: answer.id,
                                    count: count
                                };
                                question.chosenAnswers.create(newChosenAnswer, function(err, createdChosenAnswer) {
                                    if (createdChosenAnswer) return cb(null, true);
                                });
                            });
                        });
                    });
                });
            });
        });

        // cb(null, response);
    };
    Survey.remoteMethod(
        'vote',
        {
            http: { path: '/vote', verb: 'put' },
            accepts: [
                {
                    arg: 'id',
                    type: 'string',
                    required: true,
                    http: {
                        source: 'query'
                    }
                },
                {
                    arg: 'data',
                    type: 'object',
                    required: true,
                    http: {
                        source: 'body'
                    }
                },
            ],
            returns: { arg: 'success', type: 'boolean' }
        }
    );
};
