const connection = require('../../config/connection');

const addPost = (title, content, userId) => connection.query('INSERT INTO post (title, content, user_id) values ($1,$2,$3) RETURNING *', [title, content, userId]);

module.exports = addPost;
