const connection = require('../../config/connection');

const getUserName = (id) => connection.query('SELECT username FROM users where id = $1', [id]);

module.exports = getUserName;
