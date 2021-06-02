const knex = require('../index');

const sampleTable = () => knex
  .insert({
    id: '38c3de93-874d-444c-b83f-11e89cca252b',
    name: 'John',
    another_id: '078-05-1120',
  })
  .into('sample_table')
  .returning('*');

const auth = () => knex
  .insert({
    id: '80397458-cf0a-49ec-9306-6b9db37dab6f',
    username: 'user',
    password: '210570e75db3b2c5a5f609c0e507ed9bc88490ed3113cae3c421da2e3b0369cbace47abe7bc475938b7a73cf3d2cf9a81853bb1fa2bd71b847750703d7bb7ebe',
    salt: 'b6dbaed307881a60032185e950aee766bbf5c26b85a85f0dbc5d5248df6417e6',
  })
  .into('auth')
  .returning('*');

module.exports = {
  sampleTable,
  auth,
};
