import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  //   ! if the token is not send
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  //   ! verify the token
  jwt.verify(token, config.jwt_secret as string, function (err, decoded) {
    if (err) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }
    req.user = decoded;
  });
  next();
};
