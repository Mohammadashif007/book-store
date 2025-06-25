import { TUser } from "./user.interface";
import { User } from "./user.model";
import bcrypt from "bcrypt";

const registerUser = async (payload: TUser) => {
//   const { password, ...others } = payload;
//   const hashedPassword = await bcrypt.hash(password, Number(config.salt_round));
//   const result = await User.create({ ...others, password: hashedPassword });
  const result = await User.create(payload);
  return result;
};

const loginUser = async (payload: Partial<TUser>) => {
  const result = await User.findOne({ email: payload.email });
  if (!result) {
    throw new Error("User not found");
  }
  const checkPassword = await bcrypt.compare(
    payload.password || "",
    result.password,
  );
  if (!checkPassword) {
    throw new Error("Invalid credentials");
  }
  return result;
};

const getAllUser = async () => {
  const result = await User.find();
  return result;
};

export const UserServices = {
  registerUser,
  loginUser,
  getAllUser,
};
