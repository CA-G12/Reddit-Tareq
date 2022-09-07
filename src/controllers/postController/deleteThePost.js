const { deletePost } = require('../../database/queries/posts');

const deleteThePost = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('id', id);
    await deletePost(id);
  } catch (err) {
    res.json(err);
  }
};

module.exports = deleteThePost;
