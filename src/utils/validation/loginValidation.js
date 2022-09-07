const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  passowrd: Joi.string().required(),
});

module.exports = loginSchema;
