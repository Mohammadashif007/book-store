import express from "express";
import { OrderControllers } from "./order.controller";
import { auth } from "../../middleware/auth";

const router = express.Router();

router.post("/orders", auth, OrderControllers.createOrder);
router.delete("/orders/:orderId", OrderControllers.deleteOrder);
router.get("/orders", auth, OrderControllers.getAllOrders);
router.get("/orders/revenue", OrderControllers.getTotalRevenue);

export const OrderRoutes = router;
