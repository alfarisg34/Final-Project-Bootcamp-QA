const registerUnsuccessSchema = {
    type: 'object',
    properties: {
        error: { type: 'string' },
    },
    required: ['error'],

}

module.exports = registerUnsuccessSchema