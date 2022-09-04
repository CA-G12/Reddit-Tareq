require('dotenv').config();
const { join } = require('path');
const express = require('express');
const compression = require('compression');
const cookieparser = require('cookie-parser');
const router = require('./router');

const app = express();

app.use([
  cookieparser(),
  compression(),
  express.json(),
  express.urlencoded({ extended: false }),
  express.static(join(__dirname, '..', 'public')),
  router,
]);

app.set('port', process.env.PORT || 3000);

module.exports = app;
