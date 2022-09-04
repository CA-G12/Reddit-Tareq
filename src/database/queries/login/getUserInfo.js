const connection = require('../../config/connection');

const gerUserInfo = (email) => connection.query('SELECT * FROM users where email = $1', [email]);

module.exports = gerUserInfo;
