module.exports = {
  login: {
    tags: ['Auth'],
    summary: 'Logs in and generates JWT token',
    operationId: 'login',
    security: [],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties:
            {
              username: {
                type: 'string',
                example: 'user',
              },
              password: {
                type: 'string',
                example: 'Qwerty@123',
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'OK',
        headers: {
          'access-otken': {
            schema: { type: 'string' },
            description: 'JWT token',
          },
        },
      },
      500: {
        description: 'Internal Server Error',
      },
    },
  },
  verify: {
    tags: ['Auth'],
    summary: 'Verifies JWT token validity',
    operationId: 'verify',
    security: [],
    parameters: [
      {
        in: 'header',
        name: 'access-token',
        schema: {
          type: 'string',
        },
        required: true,
      },
    ],
    responses: {
      200: {
        description: 'OK',
      },
      401: {
        description: 'Unauthorized',
      },
      500: {
        description: 'Internal Server Error',
      },
    },
  },
};
