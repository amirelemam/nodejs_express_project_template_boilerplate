'use strict';

const createTables = require('./queries');

module.exports = async () => {
  await createTables.loadDependencies();
  await createTables.sampleTable();
};
