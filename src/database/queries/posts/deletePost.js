const connection = require('../../config/connection');

const deletePost = (id) => connection.query('DELETE FROM posts WHERE id = $1', [id]);

module.exports = deletePost;
