const connection = require('../../config/connection');

const deletePost = (id) => connection.query('DELETE FROM posts WHERE od = $1', [id]);

module.exports = deletePost;
