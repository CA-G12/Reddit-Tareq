const postRouter = require('express').Router();
const checkSignin = require('../middlewares/checkSignin');

const {
  addThePost, deleteThePost, getAllThePosts, getThePost,
} = require('../controllers');

// console.log(getThePost);
postRouter.post('/', checkSignin, addThePost);
postRouter.get('/', getAllThePosts);
postRouter.get('/:id', getThePost);
postRouter.delete('/:id', checkSignin, deleteThePost);

module.exports = postRouter;
