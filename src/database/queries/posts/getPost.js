const connection = require('../../config/connection');

const getPost = (id) => connection.query('SELECT * FROM post where post.id = $1', [id]);

module.exports = getPost;
