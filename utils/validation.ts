import Joi from "joi";

const verificationCodeLength = process.env.verificationCodeLength || 5;
const codeLength = +verificationCodeLength;

const loginValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const registerValidationSchema = loginValidationSchema.append({
  confirmPassword: Joi.any().valid(Joi.ref("password")).required(),
});

const OTPValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  OTPCode: Joi.string().regex(/^[0-9]+$/).length(codeLength).required().messages({
    "string.pattern.base": "The verification code must only be numbers"
  }),
});

const emailValidationSchema = Joi.object({
  email: Joi.string().email().required()
})

export { 
  loginValidationSchema, 
  registerValidationSchema, 
  OTPValidationSchema ,
  emailValidationSchema,
};
