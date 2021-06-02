const knex = require('knex');

const connection = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const db = knex({
  client: 'pg',
  version: process.env.DB_DBMS_VERSION || '8.5',
  connection,
  pool: {
    min: process.env.DB_POLL_MIN || 2,
    max: process.env.DB_POLL_MAX || 10,
  },
});

module.exports = db;
