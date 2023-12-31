const allUserSchema = {
    type: 'array',
    items: {
        type: 'object',
        properties: {
            id: { type: 'number' },
            email: { type: 'string' },
            first_name: { type: 'string' },
            last_name: { type: 'string' },
            avatar: { type: 'string' },
        },
        required: ['id', 'email', 'first_name', 'last_name'],
    }
}

module.exports = allUserSchema