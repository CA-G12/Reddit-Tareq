const { addPost } = require('../../database/queries');

const addThePost = (req, res, next) => {
  const { title, content } = req.body;
  const { userId } = req;
  addPost(title, content, userId)
    .then((data) => res.json(data.rows))
    .catch((err) => {
      next(err);
    });
};

module.exports = addThePost;
