const knex = require('../index');

const sampleTable = () => knex.schema.dropTableIfExists('sample_table');

const auth = () => knex.schema.dropTableIfExists('auth');

module.exports = {
  sampleTable,
  auth,
};
