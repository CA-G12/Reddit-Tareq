const bcrypt = require('bcrypt');

const hashPassword = (password, cb) => {
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) cb(err);
    cb(null, hash);
  });
};

const comparePassword = (password, hashedPassword, cb) => {
  bcrypt.compare(password, hashedPassword, (err, res) => {
    if (err) cb(err);
    cb(null, res);
  });
};

module.exports = {
  hashPassword,
  comparePassword,
};
