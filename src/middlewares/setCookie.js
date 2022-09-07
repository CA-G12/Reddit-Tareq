require('dotenv').config();
const { signToken } = require('../utils');

// eslint-disable-next-line consistent-return
const setCookie = async (req, res) => {
  try {
    const {
      env: { SECRET_KEY },
    } = process;
    const { id } = req;
    const token = await signToken({ id }, SECRET_KEY);
    res.cookie('token', token, {
      maxAge: 300000000,
      httpOnly: true,
      sameSite: true,
    })
      .status(201)
      .json({
        status: 'success',
        message: 'User successfully signed up',
      });
  } catch (err) {
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};
module.exports = setCookie;
