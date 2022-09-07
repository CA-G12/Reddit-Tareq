const { getLoginPage, getTheUserName, login } = require('./loginController');
const { getSignUpPage, signup } = require('./signupController');
const logout = require('./logoutController');

module.exports = {
  getLoginPage,
  getTheUserName,
  login,
  getSignUpPage,
  signup,
  logout,
};
