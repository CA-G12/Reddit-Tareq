const bcrypt = require('bcrypt');

const hashPassword = (password) => bcrypt.hash(password, 10);

const comparePassword = async (password, hash) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    return false;
  }
};
module.exports = {
  hashPassword,
  comparePassword,
};
