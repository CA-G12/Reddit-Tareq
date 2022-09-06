const postRouter = require('express').Router();

const {
  addThePost, deleteThePost, getAllThePosts, getThePost,
} = require('../controllers');

// console.log(getThePost);
postRouter.post('/', addThePost);
postRouter.get('/', getAllThePosts);
postRouter.get('/:id', getThePost);
postRouter.delete('/:id', deleteThePost);

module.exports = postRouter;
