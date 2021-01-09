const joi = require('@hapi/joi');
const logger = require('../../common/logger');

const create = async (body) => {
  const schema = joi.object().keys({
    name: joi.string().required(),
    anotherId: joi.string().uuid().required(),
  });

  try {
    await schema.validateAsync(body);
    return true;
  } catch (error) {
    logger.error(error);
    return false;
  }
};

const update = async (body) => {
  const schema = joi.object().keys({
    name: joi.string().optional(),
    anotherId: joi.string().uuid().optional(),
  });

  try {
    await schema.validateAsync(body);
    return true;
  } catch (error) {
    logger.error(error);
    return false;
  }
};

module.exports = {
  create,
  update,
};
