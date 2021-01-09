'use strict';

const services = require('./services');

const create = (body) => {
  return services.create(body);
};

const update = (id, body) => {
  return services.update(id, body);
};

const remove = (id) => {
  return services.remove(id);
};

const getById = (id) => {
  return services.getById(id);
};

const getAll = () => {
  return services.getAll();
};

module.exports = {
  create,
  update,
  remove,
  getById,
  getAll,
};
