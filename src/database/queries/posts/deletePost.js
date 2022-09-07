const connection = require('../../config/connection');

const deletePost = (id) => connection.query('DELETE FROM post WHERE id=$1', [id]);

module.exports = deletePost;
