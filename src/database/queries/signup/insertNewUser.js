const connection = require('../../config/connection');

const insertNewUser = (username, firstName, lastName, email, password) => connection.query('INSERT INTO users (username,first_name,last_name,email,password) values ($1,$2,$3,$4,$5)', [username, firstName, lastName, email, password]);

module.exports = insertNewUser;
