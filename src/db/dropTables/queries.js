'use strict';

const knex = require('../index');

const sampleTable = () => {
  return knex.schema.dropTableIfExists('sample_table');
};

module.exports = {
  sampleTable,
};
