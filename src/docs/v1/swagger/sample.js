module.exports = {
  getById: {
    tags: ['Sample'],
    description: 'Returns all',
    operationId: 'getById',
    security: [
      {
        bearerAuth: [],
      },
    ],
    responses: {
      200: {
        description: 'Item with specified key',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'Name',
                },
                another_id: {
                  type: 'string',
                  description: 'An optional ID',
                },
                created_at: {
                  type: 'string',
                  format: 'date',
                  description: 'Timestamp of creation',
                },
                updated_at: {
                  type: 'string',
                  format: 'date',
                  description: 'Timestamp of update',
                },
                deleted_at: {
                  type: 'string',
                  format: 'date',
                  description: 'Timestamp of deletion',
                },
              },
            },
          },
        },
      },
      500: {
        description: 'Internal Server Error',
      },
    },
  },
  getAll: {
    tags: ['Sample'],
    description: 'Returns all',
    operationId: 'getAll',
    security: [
      {
        bearerAuth: [],
      },
    ],
    responses: {
      200: {
        description: 'A list of items.',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  name: {
                    type: 'string',
                    description: 'Name',
                  },
                  another_id: {
                    type: 'string',
                    description: 'An optional ID',
                  },
                  created_at: {
                    type: 'string',
                    format: 'date',
                    description: 'Timestamp of creation',
                  },
                  updated_at: {
                    type: 'string',
                    format: 'date',
                    description: 'Timestamp of update',
                  },
                  deleted_at: {
                    type: 'string',
                    format: 'date',
                    description: 'Timestamp of deletion',
                  },
                },
              },
            },
          },
        },
      },
      500: {
        description: 'Internal Server Error',
      },
    },
  },
  remove: {
    tags: ['Sample'],
    description: 'Deletes item by ID',
    operationId: 'remove',
    security: [
      {
        bearerAuth: [],
      },
    ],
    responses: {
      204: {
        description: 'No content',
      },
      500: {
        description: 'Internal Server Error',
      },
    },
  },
  update: {
    tags: ['Sample'],
    description: 'Returns all',
    operationId: 'update',
    security: [
      {
        bearerAuth: [],
      },
    ],
    responses: {
      200: {
        description: 'Updates item by ID',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'Name',
                },
                another_id: {
                  type: 'string',
                  description: 'An optional ID',
                },
                created_at: {
                  type: 'string',
                  format: 'date',
                  description: 'Timestamp of creation',
                },
                updated_at: {
                  type: 'string',
                  format: 'date',
                  description: 'Timestamp of update',
                },
                deleted_at: {
                  type: 'string',
                  format: 'date',
                  description: 'Timestamp of deletion',
                },
              },
            },
          },
        },
      },
      500: {
        description: 'Internal Server Error',
      },
    },
  },
  create: {
    tags: ['Sample'],
    description: 'Returns all',
    operationId: 'create',
    security: [
      {
        bearerAuth: [],
      },
    ],
    responses: {
      201: {
        description: 'Creates an item',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'Name',
                },
                another_id: {
                  type: 'string',
                  description: 'An optional ID',
                },
                created_at: {
                  type: 'string',
                  format: 'date',
                  description: 'Timestamp of creation',
                },
                updated_at: {
                  type: 'string',
                  format: 'date',
                  description: 'Timestamp of update',
                },
                deleted_at: {
                  type: 'string',
                  format: 'date',
                  description: 'Timestamp of deletion',
                },
              },
            },
          },
        },
      },
      500: {
        description: 'Internal Server Error',
      },
    },
  },
};
