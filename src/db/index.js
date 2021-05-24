const knex = require('knex');

const connection = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'postgres',
};

const db = knex({
  client: 'pg',
  version: '8.5',
  connection,
  pool: {
    min: 2,
    max: 10,
  },
});

module.exports = db;
