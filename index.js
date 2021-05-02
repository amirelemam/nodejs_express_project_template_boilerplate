const app = require('./src/app');
const logger = require('./src/common/logger');

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => logger.info(`Server running at ${PORT}`));
