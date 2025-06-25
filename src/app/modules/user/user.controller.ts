import { NextFunction, Request, Response } from "express";
import { validateLogin, validateUser } from "./user.validation";
import { UserServices } from "./user.service";

const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userData = req.body;
    const validatedData = validateUser.parse(userData);
    const result = await UserServices.registerUser(validatedData);
    res.status(201).json({
      success: true,
      message: "user registered successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const loginInfo = req.body;
    const validatedLogin = validateLogin.parse(loginInfo);
    const result = await UserServices.loginUser(validatedLogin);
    res.status(200).json({
      success: true,
      message: "User login successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserServices.getAllUser();
    res.status(200).json({
      success: false,
      message: "all user retrieve successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserControllers = {
  registerUser,
  loginUser,
  getUser,
};
