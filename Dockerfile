FROM node:alpine

COPY . /dist
WORKDIR /dist

ENV NODE_ENV=dev
ENV DB_HOST=localhost
ENV DB_USER=postgres
ENV DB_PASSWORD=Qwerty@123
ENV SENTRY_DSN=dsn-test

RUN npm install --production

ENTRYPOINT ["npm", "start"]