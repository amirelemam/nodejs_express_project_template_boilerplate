## Node.js Express Proejct Template Boilerplate

Basic structure to create a new project.

### Requirements

- Node.js v12 or later
- PostgreSQL 7.2 or later
- Sentry account
- AWS CLI configured (optional)
- AWS Amplify configured (optional)

### Environment Variables

**Required**

- DB_DBMS_NAME: Defines DBMS client, according to [Knex convention](http://knexjs.org/#Installation-client), defaults to 'pg' (PostgreSQL)
- DB_DBMS_VERSION: Defines DBMS version, defaults to 7.2
- DB_POLL_MIN: Defines minimum quantity of connections on DB pool, defaults to 0.
- DB_POLL_MAX: Defines maximum quantity of connections on DB pool, defaults to 7.
- DB_HOST: Database host
- DB_USER: Database user
- DB_PASSWORD: Database password
- DB_NAME: Database name
- AWS_AMPLIFY_ENABLED: enables/disables authentication middleware
- SENTRY_ENABLED: enables/disables Sentry Error Tracking

**Optional**

- PORT: Specifies port to run the server (if not using Serverless)
- SENTRY_DSN: DSN to send errors to Sentry
- AWS_USER_POOL_ID: User Pool ID, you can find it on Cognito, inside AWS Console
- AWS_REGION: Region where Amplify is configured
- AWS_USER_AUD: Audience name on Cognito, used to check if token on request is valid

### Install

`$ npm install`

### Run tests

`$ npm test`

### Start offline

`$ npm run start-local`

### Start

`$ npm start`

### License

These files are licensed under the [MIT License](LICENSE)
