const Joi = require('joi');

module.exports = Joi.object({
  email: Joi.string().email().required(),
  passowrd: Joi.string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    )
    .required(),
});
