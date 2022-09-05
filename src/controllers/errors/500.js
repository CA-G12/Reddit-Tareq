const { join } = require('path');

// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  res
    .status(500)
    .sendFile(join(__dirname, '..', '..', '..', '/public', '/errors', '/500', '500.html'));
};

module.exports = serverError;
