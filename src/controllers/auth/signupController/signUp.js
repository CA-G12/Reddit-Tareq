const { hashPassword, signUpSchema } = require('../../../utils');
const { getUserByEmail, insertNewUser } = require('../../../database/queries');

const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    await signUpSchema.validateAsync(
      { username, email, password },
      { abortEarly: false },
    );
    const checkEmail = await getUserByEmail(email);
    if (checkEmail) {
      return res.status(401).json({
        status: 'error',
        message: 'User already exist',
      });
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await insertNewUser(username, email, hashedPassword);
    const userId = newUser.rows[0].id;
    req.id = userId;
    next();
  } catch (error) {
    if (error.details) {
      const allErrors = error.details.map((x) => x.message);
      return res.json(allErrors);
    }
    res.json(error);
  }
};

module.exports = { signup };
