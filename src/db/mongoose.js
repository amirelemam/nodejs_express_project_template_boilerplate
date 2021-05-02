const mongoose = require('mongoose');
const logger = require('../common/logger');

const dbUri = process.env.DB_CONN_STRING;

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  autoIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on('connected', () => {
  logger.info('Connected to MongoDB');
  mongoose.set('returnOriginal', false);
});

mongoose.connection.on('err', (err) => {
  logger.error(`Mongoose connected error=${err}`);
});

mongoose.connection.on('disconnected', () => {
  logger.info('Mongoose disconnected');
});
