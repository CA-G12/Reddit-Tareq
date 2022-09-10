const showPostPage = (req, res) => {
  res.json({ location: './post/index.html', id: `${req.params.id}` });
};

module.exports = showPostPage;
