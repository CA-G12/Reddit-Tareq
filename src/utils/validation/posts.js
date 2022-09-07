const Joi = require('joi');

const postsSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

module.exports = postsSchema;
