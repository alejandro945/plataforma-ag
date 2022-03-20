const fs = require('fs');
const { dev } = require('./index')
module.exports = {
  development: {
    dialect: dev.dialect,
    username: dev.username,
    password: dev.password,
    database: dev.database,
    host: dev.host,
    dialectOptions: {
      socketPath: dev.socketPath
    }
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '',
    port: 3306,
    dialect: '',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT,
    dialect: 'mysql'
  }
};