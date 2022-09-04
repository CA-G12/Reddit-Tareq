const getUserInfo = require('./login/getUserInfo');
const getUserName = require('./login/getUserName');
const addPost = require('./posts/addPost');
const deletePost = require('./posts/deletePost');
const getUserByEmail = require('./signup/getUserByEmail');
const insertNewUser = require('./signup/insertNewUser');

module.exports = {
  getUserInfo,
  getUserName,
  addPost,
  deletePost,
  getUserByEmail,
  insertNewUser,

};
