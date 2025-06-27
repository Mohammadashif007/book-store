import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";

const userSchema = new Schema<TUser>(
  {
    fullName: { type: String, required: [true, "FullName is required"] },
    userRole: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
      required: true,
    },
    email: { type: String, required: [true, "email is required"] },
    password: { type: String, required: [true, "Password is required"] },
  },
  { timestamps: true },
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, Number(config.salt_round));
  next();
});

userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

export const User = model<TUser>("User", userSchema);
