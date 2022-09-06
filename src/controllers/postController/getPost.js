const { getPost } = require('../../database/queries');

const getThePost = (req, res) => {
  const { id } = req.params;
  getPost(id)
    .then((data) => {
      console.log(data);
      return data;
    })
    .then((data) => res.json(data.rows))
    .catch((err) => {
      res.json(err);
    });
};

module.exports = getThePost;
