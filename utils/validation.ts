import Joi from "joi";

const loginValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const registerValidationSchema = loginValidationSchema.append({
  confirmPassword: Joi.any().valid(Joi.ref("password")).required(),
});

export { loginValidationSchema, registerValidationSchema };
