const knex = require('../../db');

const getCredentials = ({ username }) => knex
  .select(['password', 'salt'])
  .from('auth')
  .where('username', username)
  .andWhere('deleted_at', null)
  .first();

module.exports = {
  getCredentials,
};
