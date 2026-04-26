enum StatusCodes {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOTFOUND = 404,
  UNPROCESSABLE_ENTITY = 422,
  SERVER_ERROR = 500,
}

enum AuthStatusMessages {
  EXISTED_USER = "This account has already been created!",
  WRONG_PASSWORD = "The password is incorrect!",
  WRONG_USERNAME_PASSWORD = "The username or password is incorrect!",
  UNAUTHORIZED = "You are unauthorized, please login to your account first!",
  FORBIDDEN = "Your access has been restricted!",
  EMAIL_VERIFICATION_GRACE = "This email was recently used to register. Please check your email or try again in a few minutes",
  EMAIL_VERIFIED = "Your email has been verified",
  EMAIL_ALREADY_VERIFIED = "User email has already been verified",
  EMAIL_UNVERIFIED = "Please confirm your email first",
  TOKEN_SENDED = "Verification code has been sent to you",
  RESEND_VERIFICATION_CODE = "Verification code resent",
  EXPIRED_CODE = "Verification code has been expired, please request verification code again",
  WRONG_VERIFICATION_CODE = "The verification code is incorrect",
  NOT_EXPIRED_CODE = "The previous verification code has not expired yet. Please try again in a few minutes.",

}

enum StatusMessages {
  USER_CREATED = "User created successfully",
  USER_UPDATED = "User changed successfully",
  USER_DELETED = "User successfully deleted",
  USER_BANNED = "Your account has been banned",
  NOTFOUND_USER = "User not found, please register first!",
  FILE_CREATED = "Ad was successfully created",
  FILE_UPDATED = "Ad edited successfully",
  FILE_DELETED = "Ad removed successfully",
  NOTFOUND_FILE = "The desired ad was not found!",
  PASSWORD_UPDATED = "Password updated successfully",
  INVALID_DATA = "Invalid data",
  SERVER_ERROR = "Internal server error!",
}


export { StatusCodes, StatusMessages, AuthStatusMessages };
