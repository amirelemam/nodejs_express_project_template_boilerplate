const express = require('express');
const { NotFoundError } = require('./common/errors');

const { isDev, isTest } = require('./common/utils');
const healthCheck = require('./components/health/routes');
const createTables = require('./db/createTables/routes');
const dropTables = require('./db/dropTables/routes');
const populateTables = require('./db/populateTables/routes');
const sample = require('./components/sample/routes');
const auth = require('./components/auth/routes');

const router = express.Router();

// Application
router.use('/health', healthCheck);
router.use('/sample', sample);
router.use('/auth', auth);

// DB
if (isDev() || isTest()) {
  router.use('/create-tables', createTables);
  router.use('/drop-tables', dropTables);
  router.use('/populate-tables', populateTables);
}

// eslint-disable-next-line no-unused-vars
router.use('*', (req, res, next) => {
  if (req.url === '/') next();
  next(NotFoundError());
});

module.exports = router;
