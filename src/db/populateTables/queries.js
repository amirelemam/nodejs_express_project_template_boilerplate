'use strict';

const knex = require('../index');

const testeTable = () => {
  return knex
    .insert({
      id: '38c3de93-874d-444c-b83f-11e89cca252b',
      name: 'John',
      another_id: '078-05-1120',
    })
    .into('sample_table')
    .returning('*');
};

module.exports = {
  testeTable,
};
