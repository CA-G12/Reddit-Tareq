const { join } = require('path');

const getLoginPage = (req, res) => {
  res.sendFile(
    join(__dirname, '..', '..', '..', '..', 'public', 'login', 'index.html'),
  );
};

module.exports = { getLoginPage };
