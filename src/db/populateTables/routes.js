'use strict';

const router = require('express').Router();

const populateTables = require('./queries');

router.post('/', async (req, res, next) => {
  try {
    await populateTables.testeTable();

    return res.status(200).json('OK');
  } catch (err) {
    return next(err);
  }
});

router.post('/teste-table', async (req, res, next) => {
  try {
    await populateTables.testeTable();
    return res.status(200).json('OK');
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
