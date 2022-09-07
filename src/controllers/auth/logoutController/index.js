// const { clearCookie } = require('../../../middlewares');

const logout = (req, res) => {
  res.clearCookie('token').json({ massage: 'You are logout' });
};

// const logout = async (req, res) => {
//   try {
//     const data = await clearCookie();
//     res.json({ massage: 'You are logout ' });
//   } catch (err) {
//     res.json(err);
//   }
// };

module.exports = logout;
