const { getPost } = require('../../database/queries');

const getThePost = (req, res) => {
  const { id } = req.params;
  const userId = req.id;
  getPost(id)
    .then((data) => {
      if (data.rows.length) {
        if (data.rows[0].user_id === userId) {
          res.json(data.rows);
        } else {
          res.json({ message: 'Not Authorized' });
        }
      } else {
        res.json({ message: ' Post Dose not exist !' });
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = getThePost;
