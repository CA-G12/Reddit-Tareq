const router = require('express').Router();

const { getSignUpPage, signup } = require('../controllers');
const setCookie = require('../middlewares/setCookie');

router.get('/signup', getSignUpPage);
router.post('/signup', signup, setCookie);

module.exports = router;
