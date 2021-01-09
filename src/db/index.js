'use strict';

const connection = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || '',
};

const knex = require('knex')({
  client: process.env.DB_DBMS_CLIENT || 'pg',
  version: process.env.DB_DBMS_VERSION || '7.2',
  connection,
  pool: {
    min: process.env.DB_POLL_MIN || 0,
    max: process.env.DB_POLL_MAX || 7,
  },
});

module.exports = knex;
