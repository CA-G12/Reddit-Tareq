const { addPost } = require('../../database/queries');

const addThePost = (req, res, next) => {
  const { title, content } = req.body;
  const { id } = req;
  addPost(title, content, id)
    .then((data) => res.json(data.rows))
    .catch((err) => {
      next(err);
    });
};

module.exports = addThePost;
