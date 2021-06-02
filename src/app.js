const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const sanitize = require('sanitize');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const { v4: uuidv4 } = require('uuid');

const swaggerDocument = require('./docs/swagger');
const { NotFoundError } = require('./common/errors');
const logger = require('./common/logger');
const routes = require('./routes');
const {
  isDev, isTest, checkRequiredVars,
} = require('./common/utils');

checkRequiredVars([
  'DB_HOST',
  'DB_USER',
  'DB_PASSWORD',
  'DB_NAME',
  'SECRET_TOKEN',
]);
require('./db');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(sanitize.middleware);
app.use((req, res, next) => {
  req.id = uuidv4();
  next();
});
app.use(
  morgan((tokens, req, res) => {
    logger.http(
      [
        req.id,
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'),
        '-',
        tokens['response-time'](req, res),
        'ms',
      ].join(' '),
    );
  }),
);

/* istanbul ignore next */
if (!isDev() && !isTest()) {
  // eslint-disable-next-line no-unused-vars
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', ['GET', 'POST', 'PUT', 'DELETE']);
    return next();
  });
}

app.use('/api/v1', routes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/* istanbul ignore next */
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err) {
    logger.error(err.stack);

    if (!err.status) return res.status(500).json();
    return res.status(err.status).send({ error: err.message });
  }
  const { status, message } = NotFoundError();
  return res.status(status).send(message);
});

module.exports = app;
