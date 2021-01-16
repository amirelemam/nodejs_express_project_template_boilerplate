FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

ENV NODE_ENV=dev
ENV DB_HOST=localhost
ENV DB_USER=postgres
ENV DB_PASSWORD=Qwerty@123
ENV SENTRY_DSN=dsn-test

COPY . .

EXPOSE 4000
CMD [ "node", "index.js" ]