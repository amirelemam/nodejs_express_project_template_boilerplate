const repository = require('./repository');
const {
  NotFoundError,
} = require('../../common/errors');

/**
 * @description Get by ID
 * @param {string} id Item ID
 * @returns {Object}
 * @author Amir Elemam
 */
const getById = async (id) => {
  const result = await repository.getById(id);

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
const getAll = () => repository.getAll();

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

  const keys = Object.keys(body);

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    createBody[fields[key]] = body[key];
  }

  const [recordCreated] = await repository.create(createBody);

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

  const keys = Object.keys(body);

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    updateBody[fields[key]] = body[key];
  }

  const [recordUpdated] = await repository.update(id, updateBody);

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
  const [recordDeleted] = await repository.remove(id);

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
