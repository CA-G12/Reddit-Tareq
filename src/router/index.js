const { Router } = require('express');

const router = Router();

const login = require('./login');
const signup = require('./signup');
const logout = require('./logout');

const postRouter = require('./post');
const { clientError, serverError } = require('../controllers');

router.use(signup);
router.use(login);
router.use('/posts', postRouter);
// router.use(postRouter);
router.use(logout);
router.use(clientError);
router.use(serverError);

module.exports = router;
