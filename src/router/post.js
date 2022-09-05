const router = require('express').Router();

const { addThePost, deleteThePost } = require('../controllers');

router.post('/post', addThePost);
router.post('/post/:id', deleteThePost);

module.exports = router;
