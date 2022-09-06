const { deletePost } = require('../../database/queries/posts');

const deleteThePost = (req, res) => {
  const { id } = req.params;
  deletePost(id)
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = deleteThePost;
