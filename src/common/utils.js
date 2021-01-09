function toBeStringOrNull(received) {
  return received === null || typeof received === 'string'
    ? {
        pass: true,
      }
    : {
        pass: false,
      };
}

module.exports = {
  toBeStringOrNull,
};
