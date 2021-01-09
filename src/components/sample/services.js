'use strict';

const queries = require('./queries');
const {
  UnprocessableEntityError,
  NotFoundError,
} = require('../../common/errors');

/**
 * @description Get by ID
 * @param {string} id Item ID
 * @returns {Object}
 * @author Amir Elemam
 */
const getById = async (id) => {
  const result = await queries.getById(id);

  if (!result) {
    throw NotFoundError();
  }

  return result;
};

/**
 * @description Get all
 * @returns {Object}
 * @author Amir Elemam
 */
const getAll = () => {
  return queries.getAll();
};

/**
 * @description Create
 * @param {Object} obj Deconstructed object
 * @param {string} obj.name Name
 * @param {string} obj.anotherId Another ID
 * @returns {null|Object}
 * @author Amir Elemam
 */
const create = async (body) => {
  const fields = {
    name: 'name',
    anotherId: 'another_id',
  };

  const createBody = {};

  for (const key in body) {
    createBody[fields[key]] = body[key];
  }

  const [recordCreated] = await queries.create(createBody);

  return recordCreated;
};

/**
 * @description Update
 * @param {string} id ID
 * @param {Object} obj Deconstructed object
 * @param {string} [obj.name] Name
 * @param {string} [obj.anotherId] Another ID
 * @returns {null|Object}
 * @author Amir Elemam
 */
const update = async (id, body) => {
  const fields = {
    name: 'name',
    anotherId: 'another_id',
  };

  const updateBody = {};

  for (const key in body) {
    updateBody[fields[key]] = body[key];
  }

  const [recordUpdated] = await queries.update(id, updateBody);

  if (!recordUpdated) throw NotFoundError();
  return recordUpdated;
};

/**
 * @description Remove
 * @param {string} id ID
 * @returns {null|Object}
 * @author Amir Elemam
 */
const remove = async (id) => {
  const [recordDeleted] = await queries.remove(id);

  if (!recordDeleted) return null;
  return recordDeleted;
};

module.exports = {
  create,
  update,
  remove,
  getById,
  getAll,
};
