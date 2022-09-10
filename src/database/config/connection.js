const { Pool } = require('pg');
require('dotenv').config();

const {
  NODE_ENV, DB_URL, TEST_DATABASE_URL, DATABASE_URL_PRODUCTION,
} = process.env;

let connectionString = '';
let ssl = false;
switch (NODE_ENV) {
  case 'production':
    connectionString = DATABASE_URL_PRODUCTION;
    ssl = {
      rejectUnauthorized: false,
    };
    break;

  case 'development':
    connectionString = DB_URL;
    break;

  case 'test':
    connectionString = TEST_DATABASE_URL;
    break;

  default:
    throw new Error('NODE_ENV is not set to development or production');
}

const connection = new Pool({
  connectionString,
  ssl,
});

module.exports = connection;
