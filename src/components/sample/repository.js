const knex = require('../../db');

const getById = (id) => knex
  .select()
  .from('sample_table')
  .where('id', id)
  .andWhere('deleted_at', null)
  .first();

const getAll = () => knex.select().from('sample_table').where('deleted_at', null);

const update = async (id, body) => knex('sample_table')
  .where('id', id)
  .andWhere('deleted_at', null)
  .update(body)
  .returning('*');

const create = (body) => knex.insert(body).into('sample_table').returning('*');

const remove = (id) => knex('sample_table')
  .where('id', id)
  .andWhere('deleted_at', null)
  .update({ deleted_at: knex.fn.now() })
  .returning('*');

module.exports = {
  getById,
  getAll,
  update,
  create,
  remove,
};
