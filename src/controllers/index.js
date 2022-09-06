// const addThePost = require('./')
const {
  addThePost, deleteThePost, getAllThePosts, getThePost,
} = require('./postController');

const clientError = require('./errors/404');
const serverError = require('./errors/500');

module.exports = {
  addThePost,
  deleteThePost,
  getAllThePosts,
  getThePost,
  clientError,
  serverError,
};
