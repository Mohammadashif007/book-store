import express from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router();

router.post("/orders", OrderControllers.createOrder);
router.delete("/orders/:orderId", OrderControllers.deleteOrder);
router.get("/orders", OrderControllers.getAllOrders);
router.get("/orders/revenue", OrderControllers.getTotalRevenue);


export const OrderRoutes = router; 