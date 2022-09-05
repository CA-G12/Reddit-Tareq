const { getUserInfo, getUserName } = require('./login');
const { addPost, deletePost } = require('./posts');
const { getUserByEmail, insertNewUser } = require('./signup');

module.exports = {
  getUserInfo,
  getUserName,
  addPost,
  deletePost,
  getUserByEmail,
  insertNewUser,

};
