import config from "../../config";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginUser = async (payload: TLoginUser) => {
  // ! checking if the user is exist
  const isUserExist = await User.findOne({ email: payload.email });
  if (!isUserExist) {
    throw new Error("User does not exist");
  }
  const password = await bcrypt.compare(payload.password, isUserExist.password);
  if (!password) {
    throw new Error("Invalid credentials");
  }
  const userInfo = {
    id: isUserExist._id,
    role: isUserExist.userRole
  };
  const token = jwt.sign(userInfo, config.jwt_secret as string, {
    expiresIn: "1h",
  });
  return token;
};

export const AuthServices = {
  loginUser,
};
