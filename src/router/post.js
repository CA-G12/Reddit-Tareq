const postRouter = require('express').Router();
const checkSignin = require('../middlewares/checkSignin');

const {
  addThePost, deleteThePost, getAllThePosts, getThePost,
} = require('../controllers');

postRouter.post('/', checkSignin, addThePost);
postRouter.get('/', getAllThePosts);
postRouter.get('/:id', checkSignin, getThePost);
postRouter.delete('/:id', checkSignin, deleteThePost);

module.exports = postRouter;
