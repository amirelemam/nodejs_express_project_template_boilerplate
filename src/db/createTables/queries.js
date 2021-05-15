const knex = require('../index');

const loadDependencies = () => knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

const createTimestamp = async (table) => {
  await knex.raw(`CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;`);

  await knex.raw(`CREATE TRIGGER set_timestamp
BEFORE UPDATE ON ${table}
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();`);
};

const sampleTable = async () => {
  const tableName = 'sample_table';

  await knex.schema.createTable(tableName, (table) => {
    table
      .uuid('id')
      .defaultTo(knex.raw('uuid_generate_v4()'))
      .notNullable()
      .primary();
    table.string('name').notNullable();
    table.string('another_id').unique().notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at').nullable();
  });

  await createTimestamp(tableName);
};

module.exports = {
  loadDependencies,
  sampleTable,
};
