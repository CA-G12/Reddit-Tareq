const { getUserInfo } = require('../../../database/queries');

const { loginSchema, comparePassword } = require('../../../utils');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await loginSchema.validateAsync(
      { email, password },
      { abortEarly: false },
    );
    const user = await getUserInfo(email);
    if (!user) {
      return res.status(401).json({
        status: 'error',
        message: 'User does not already exists',
      });
    }

    const checkUser = await comparePassword(password, user.password);
    if (!checkUser) {
      return res.status(401).json({
        status: 'error',
        message: 'Email or Password is Wrong !',
      });
    }

    req.id = user.id;
    next();
  } catch (err) {
    if (err.details) {
      const allErrors = err.details.map((x) => x.message);
      return res.json(allErrors);
    }
    res.json(err);
  }
};

module.exports = {login};
