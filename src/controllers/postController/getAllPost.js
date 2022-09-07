const { getAllPosts } = require('../../database/queries');

const getAllThePosts = async (req, res) => {
  try {
    const data = await getAllPosts();
    res.json(data.rows);
  } catch (err) {
    res.json(err);
  }
};
module.exports = getAllThePosts;
