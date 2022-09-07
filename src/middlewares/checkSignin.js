require('dotenv').config();
const { verifyToken } = require('../utils');

const checkSignin = async (req, res, next) => {
  try {
    const { env: { SECRET_KEY } } = process;

    const { cookies: { token } } = req;
    if (token) {
      const value = await verifyToken(token, SECRET_KEY);
      req.user_id = value.id;
      req.id = value.id;
      next();
      //   req.userId = value.id;
    } else {
      res.status(401).json({ status: 'error', message: 'Unauthorized' });
    }
  } catch (err) {
    if (err.message.includes('invalid')) {
      res.status(401).json({ status: 'error', message: 'Unauthorized' });
    } else {
      next(err);
    }
  }
};
module.exports = checkSignin;
