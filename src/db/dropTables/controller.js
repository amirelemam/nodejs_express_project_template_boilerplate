const dropTables = require('./queries');

module.exports = async () => {
  await dropTables.sampleTable();
  await dropTables.auth();
};
