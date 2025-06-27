import { NextFunction, Request, Response } from "express";
import { validateUser } from "./user.validation";
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
  getUser,
};
