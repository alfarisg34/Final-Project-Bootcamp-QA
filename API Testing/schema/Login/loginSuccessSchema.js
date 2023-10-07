const loginSuccessSchema = {
    type: 'object',
    properties: {
        token: { type: 'string' },
    },
    required: ['token'],

}

module.exports = loginSuccessSchema