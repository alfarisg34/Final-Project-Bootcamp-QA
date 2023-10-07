const resultUpdateUserSchema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        job: { type: 'string' },
        updatedAt: { type: 'string' },
    },
    required: ['name', 'job', 'updatedAt'],
}

module.exports = resultUpdateUserSchema