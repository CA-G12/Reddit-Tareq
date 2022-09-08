const connection = require('../../config/connection');

const getAllPosts = () => connection.query('SELECT post.title , post.content , post.id as id , users.id as user_id , users.username , users.email FROM post JOIN users ON (post.user_id = users.id)');

module.exports = getAllPosts;
