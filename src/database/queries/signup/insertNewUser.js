const connection = require('../../config/connection');

const insertNewUser = (username, email, password) => connection.query('INSERT INTO users (username,email,password) values ($1,$2,$3)', [username, email, password]);

module.exports = insertNewUser;
