'use strict';

const router = require('express').Router();
const validation = require('./validation');
const { BadRequestError, ConflictError } = require('../../common/errors');
const authentication = require('../../common/middlewares/authentication');
const controller = require('./controller');

router.get('/:id', authentication, async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await controller.getById(id);

    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});

router.get('/', authentication, async (req, res, next) => {
  try {
    const result = await controller.getAll();

    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});

router.post('/', authentication, async (req, res, next) => {
  try {
    const { body } = req;

    const isValid = await validation.create(body);

    if (!isValid) throw BadRequestError();

    const result = await controller.create(body);

    return res.status(200).json(result);
  } catch (err) {
    if (err.code === '23505') return next(ConflictError());
    return next(err);
  }
});

router.put('/:id', authentication, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const isValid = await validation.update(body);

    if (!isValid) throw BadRequestError();

    const result = await controller.update(id, body);

    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});

router.delete('/:id', authentication, async (req, res, next) => {
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
