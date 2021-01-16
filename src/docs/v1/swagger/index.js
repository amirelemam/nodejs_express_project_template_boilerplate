const sample = require('./sample');

module.exports = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'Sample API',
    description: 'This is a Node.js & Express boilerplate project',
    termsOfService: '',
    contact: {
      name: 'Amir Elemam',
    },
    license: {
      name: 'MIT',
      url:
        'https://github.com/amirelemam/nodejs_express_project_template_boilerplate/blob/master/LICENSE',
    },
  },
  components: {
    schemas: {},
    securitySchemes: {
      bearerAuth: {
        type: 'https',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  paths: {
    '/api/v1/sample': {
      get: sample.getAll,
      post: sample.create,
    },
    '/api/v1/sample/:id': {
      get: sample.getById,
      put: sample.update,
      delete: sample.remove,
    },
  },
};
