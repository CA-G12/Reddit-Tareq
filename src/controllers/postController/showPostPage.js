const showPostPage = (req, res) => {
  // console.log('location', location);
  console.log('req.params.id', req.params.id);

  res.json({ location: './post/index.html', id: `${req.params.id}` });
};

module.exports = showPostPage;
