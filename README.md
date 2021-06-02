## Node.js Express Proejct Template Boilerplate

Basic structure to create a new project.

### Requirements

- Node.js 12+
- PostgreSQL 7.2+
- MongoDB 4.2+

### Environment Variables

**Required**

- DB_HOST: Database host
- DB_USER: Database user
- DB_PASSWORD: Database password
- DB_NAME: Database name
- SENTRY_DSN: Sentry DSN

**Optional**

- PORT: Specifies port to run the server
- DB_DBMS_VERSION: Defines DBMS version, defaults to 8.5
- DB_POLL_MIN: Defines minimum quantity of connections on DB pool, defaults to 0.
- DB_POLL_MAX: Defines maximum quantity of connections on DB pool, defaults to 7.

### Install

`$ npm install`

### Run tests

`$ npm test`

### Start offline

`$ npm run start:local`

### Start

`$ npm start`

### License

These files are licensed under the [MIT License](LICENSE)
