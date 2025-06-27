import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();

router.post("/register", UserControllers.registerUser);
router.get("/", UserControllers.getUser);

export const UserRoutes = router;
