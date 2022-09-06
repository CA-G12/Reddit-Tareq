const router = require('express').Router();
const { getLoginPage } = require('../controllers');

router.get('/login', getLoginPage);

module.exports = router;
