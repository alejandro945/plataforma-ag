const fs = require('fs');
console.log(process.env.DB_USER)
module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "transportes_ag",
    host: "localhost",
    dialect: 'mysql',
    dialectOptions: {
      socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    }
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
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