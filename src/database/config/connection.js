const { Pool } = require('pg');
require('dotenv').config();

const { NODE_ENV, DB_URL } = process.env;

let connectionString = '';
let ssl = false;
switch (NODE_ENV) {
  case 'production':
    connectionString = DB_URL;
    ssl = {
      rejectUnauthorized: false,
    };
    break;

  case 'development':
    connectionString = DB_URL;
    break;

  case 'test':
    connectionString = DB_URL;
    break;

  default:
    throw new Error('throw new Error("NODE_ENV is not set to development or production")');
}

const connection = new Pool({
  connectionString,
  ssl,
});

module.exports = connection;
