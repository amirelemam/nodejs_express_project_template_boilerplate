'use strict';

const dropTables = require('./queries');

module.exports = () => {
  return dropTables.sampleTable();
};
