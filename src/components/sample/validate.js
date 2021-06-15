const joi = require("joi");
const logger = require("../../common/logger");
const { BadRequestError } = require("../../common/errors");

const create = async ({ body }, res, next) => {
  const schema = joi.object().keys({
    name: joi.string().required(),
    anotherId: joi.string().uuid().required(),
  });

  try {
    await schema.validateAsync(body);
    return next();
  } catch (error) {
    logger.error(error);
    const { status, message } = BadRequestError(error);
    return res.status(status).json(message);
  }
};

const update = async ({ body }, res, next) => {
  const schema = joi.object().keys({
    name: joi.string().optional(),
    anotherId: joi.string().uuid().optional(),
  });

  try {
    await schema.validateAsync(body);
    return next();
  } catch (error) {
    logger.error(error);
    const { status, message } = BadRequestError(error);
    return res.status(status).json(message);
  }
};

module.exports = {
  create,
  update,
};
