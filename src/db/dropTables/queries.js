const knex = require('../index');

const sampleTable = () => knex.schema.dropTableIfExists('sample_table');

module.exports = {
  sampleTable,
};
