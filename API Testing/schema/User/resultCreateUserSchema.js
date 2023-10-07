const resultCreateUserSchema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        job: { type: 'string' },
        id: { type: 'string' },
        createdAt: { type: 'string' },
    },
    required: ['id', 'name', 'job', 'createdAt'],
}

module.exports = resultCreateUserSchema