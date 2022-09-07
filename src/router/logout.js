const router = require('express').Router();
const clearCookie = require('../middlewares/clearCookie');
const logout = require('../controllers');

router.get('/logout', clearCookie, logout);

module.exports = router;
