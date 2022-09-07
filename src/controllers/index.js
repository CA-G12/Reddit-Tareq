// const addThePost = require('./')
const {
  addThePost, deleteThePost, getAllThePosts, getThePost,
} = require('./postController');

const {
  getLoginPage, getTheUserName, login, getSignUpPage, signup, logout,
} = require('./auth');

const clientError = require('./errors/404');
const serverError = require('./errors/500');

module.exports = {
  addThePost,
  deleteThePost,
  getAllThePosts,
  getThePost,
  clientError,
  serverError,
  getLoginPage,
  getTheUserName,
  login,
  getSignUpPage,
  signup,
  logout,
};
