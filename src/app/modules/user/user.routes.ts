import express from "express";

const router = express.Router();

router.post("/user/register");
router.post("/user/login");

export const UserRoutes = router;
