const router = require('express').Router();
// const clearCookie = require('../middlewares/clearCookie');
const { logout } = require('../controllers');

router.post('/logout', logout);

module.exports = router;
