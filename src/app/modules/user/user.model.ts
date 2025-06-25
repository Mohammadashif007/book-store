import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
  fullName: { type: String, required: [true, "FullName is required"] },
  email: { type: String, required: [true, "email is required"] },
  password: { type: String, required: [true, "Password is required"] },
});

export const User = model<TUser>("User", userSchema);
