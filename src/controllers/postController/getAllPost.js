const { getAllPosts } = require('../../database/queries');

const getAllThePosts = async (req, res) => {
  try {
    // console.log(req);
    const data = await getAllPosts();
    console.log(data);
    console.log('hello!');
    res.json(data.rows);
  } catch (err) {
    console.log('hello From CATCH!');
    console.log(err);
    res.json(err);
  }
};
module.exports = getAllThePosts;
