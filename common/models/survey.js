module.exports = function(Survey) {
    Survey.vote = function(id, cb) {
        self.findOne(id, function(err, survey) {
            console.log(err, survey);
        });

        var response = true;
        cb(null, response);
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
            ],
            returns: { arg: 'success', type: 'boolean' }
        }
    );
};
