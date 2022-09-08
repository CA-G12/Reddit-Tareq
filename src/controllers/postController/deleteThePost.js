const { deletePost, getPost } = require('../../database/queries/posts');

const deleteThePost = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.id;
    const post = await getPost(id);
    if (post.rows.length) {
      if (post.rows[0].user_id === userId) {
        await deletePost(id);
        res.json({ message: 'Deleted Successfully' });
      } else {
        res.json({ message: 'Not Authorized' });
      }
    } else {
      res.json({ message: 'Post Dose not Exist!' });
    }
  } catch (err) {
    res.json(err);
  }
};

module.exports = deleteThePost;
