import Joi from "joi";

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const registerSchema = loginSchema.append({
  confirmPassword: Joi.any().valid(Joi.ref("password")).required(),
});

export { loginSchema, registerSchema };
