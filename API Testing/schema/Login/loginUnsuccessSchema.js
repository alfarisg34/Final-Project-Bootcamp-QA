const loginUnsuccessSchema = {
    type: 'object',
    properties: {
        error: { type: 'string' },
    },
    required: ['error'],

}

module.exports = loginUnsuccessSchema