import { Request, Response } from "express";
import { validateUser } from "./user.validation";
import { UserServices } from "./user.service";

const registerUser = async (req: Request, res: Response) => {
  const userData = req.body;
  const validatedData = validateUser.parse(userData);
  const result = await UserServices.registerUserIntoDB(validatedData);
  res.status(201).json({
    success: true,
    message: "user registered successfully",
    data: result,
  });
};

const loginUser = async (req: Request, res: Response) => {
  const loginInfo = req.body;
  const result = await UserServices.loginUser(loginInfo);
  res.status(200).json({
    success: true,
    message: "User login successfully",
    data: result,
  });
};

export const UserControllers = {
  registerUser,
  loginUser,
};
