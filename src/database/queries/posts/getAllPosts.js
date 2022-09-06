const connection = require('../../config/connection');

const getAllPosts = () => connection.query('SELECT * FROM post JOIN users ON (post.user_id = users.id)');

module.exports = getAllPosts;
