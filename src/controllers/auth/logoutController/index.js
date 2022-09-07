// const { clearCookie } = require('../../../middlewares');

// const logout = (req, res) => {
//   res.clearCookie('token').json({ massage: 'You are logout' });
// };

const logout = (req, res) => {
  res.clearCookie('token', { path: '/' });
};

module.exports = logout;
