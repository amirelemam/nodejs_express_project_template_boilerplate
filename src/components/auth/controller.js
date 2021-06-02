const services = require('./services');

const validateLogin = async ({ username, password }) => services.validateLogin({
  username, password,
});

module.exports = {
  validateLogin,
};
