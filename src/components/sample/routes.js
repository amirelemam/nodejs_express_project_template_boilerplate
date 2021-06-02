const router = require('express').Router();
const validate = require('./validate');
const { ConflictError } = require('../../common/errors');
const controller = require('./controller');

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await controller.getById(id);

    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const result = await controller.getAll();

    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});

router.post('/', validate.create, async (req, res, next) => {
  try {
    const { body } = req;

    const result = await controller.create(body);

    return res.status(200).json(result);
  } catch (err) {
    if (err.code === '23505') return next(ConflictError());
    return next(err);
  }
});

router.put('/:id', validate.update, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const result = await controller.update(id, body);

    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await controller.remove(id);

    if (!result) return res.status(404).json(result);
    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
