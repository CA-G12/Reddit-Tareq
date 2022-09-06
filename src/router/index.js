const { Router } = require('express');

const router = Router();

const postRouter = require('./post');
const { clientError } = require('../controllers');

// console.log(postRouter);
router.use('/posts', postRouter);
router.use(clientError);

module.exports = router;
