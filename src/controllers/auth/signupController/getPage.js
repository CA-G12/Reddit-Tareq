const { join } = require('path');

const getSignUpPage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', '..', 'public', 'signup', 'index.html'));
};

module.exports = {getSignUpPage};
