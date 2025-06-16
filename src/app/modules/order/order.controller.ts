import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await OrderServices.createOrderIntoDB(order);
    res.status(result.statusCode).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    await OrderServices.deleteOrderFromDB(orderId);
    res.status(201).json({
      success: true,
      message: "Order deleted successfully!",
      data: {},
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrdersFromDB();

    res.status(200).json({
      success: true,
      message: "get orders successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getTotalRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getRevenue();
    res.status(200).json({
      success: true,
      message: "get revenue successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const OrderControllers = {
  createOrder,
  deleteOrder,
  getAllOrders,
  getTotalRevenue,
};
