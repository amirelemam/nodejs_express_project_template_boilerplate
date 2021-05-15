const services = require('./services');

const create = (body) => services.create(body);

const update = (id, body) => services.update(id, body);

const remove = (id) => services.remove(id);

const getById = (id) => services.getById(id);

const getAll = () => services.getAll();

module.exports = {
  create,
  update,
  remove,
  getById,
  getAll,
};
