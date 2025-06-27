import { NextFunction, Request, Response } from "express";
import { AuthServices } from "./auth.service";

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = req.body;
    const result = await AuthServices.loginUser(body);
    res.status(200).json({
      success: true,
      message: "User login successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const AuthControllers = {
  loginUser,
};
