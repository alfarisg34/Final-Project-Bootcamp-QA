const registerSuccessSchema = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        token: { type: 'string' },
    },
    required: ['id', 'token'],

}

module.exports = registerSuccessSchema