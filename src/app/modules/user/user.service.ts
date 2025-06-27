import { TUser } from "./user.interface";
import { User } from "./user.model";

const registerUser = async (payload: TUser) => {
  //   const { password, ...others } = payload;
  //   const hashedPassword = await bcrypt.hash(password, Number(config.salt_round));
  //   const result = await User.create({ ...others, password: hashedPassword });
  const result = await User.create(payload);
  return result;
};

const getAllUser = async () => {
  const result = await User.find();
  return result;
};

export const UserServices = {
  registerUser,
  getAllUser,
};
