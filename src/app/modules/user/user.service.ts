import { TUser } from "./user.interface";
import { User } from "./user.model";

const registerUser = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const loginUser = async (payload: Partial<TUser>) => {
  const result = await User.findOne({ email: payload.email });
  if(!result){
    throw new Error("User not found")
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
