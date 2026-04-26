import { Schema, model, models, InferSchemaType } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    emailOTPToken: String,
    emailOTPTokenExpiry: Date,
    showEmail: {
      type: Boolean,
      default: false,
    },
    fullName: String,
    bio: String,
    role: {
      type: String,
      enum: ["user", "agent", "admin"],
      default: "user",
    },
    banned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const User = models.User || model("User", userSchema);

export default User;

export type UserType = InferSchemaType<typeof userSchema>;
