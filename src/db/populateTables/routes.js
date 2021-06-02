const router = require('express').Router();

const populateTables = require('./queries');

router.post('/', async (req, res, next) => {
  try {
    await populateTables.sampleTable();
    await populateTables.auth();
    return res.status(200).json('OK');
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
