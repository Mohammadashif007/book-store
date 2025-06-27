import { Products } from "../product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = async (order: TOrder) => {
  const productID = order.product;
  const product = await Products.findById(productID);
  if (!product) {
    return {
      statusCode: 400,
      success: false,
      message: "Product Not found",
    };
  }
  if (order.quantity > product.quantity) {
    return { statusCode: 400, success: false, message: "insufficient stock" };
  }
  product.quantity -= order.quantity;
  if (product.quantity === 0) {
    product.inStock = false;
  }
  await product.save();

  const totalPrice = order.quantity * product.price;

  const result = await Order.create({
    userId: order.userId,
    product: order.product,
    quantity: order.quantity,
    totalPrice: totalPrice,
  });
  return {
    statusCode: 201,
    success: true,
    message: "Product created successfully",
    data: result,
  };
};

const getAllOrdersFromDB = async () => {
  const result = await Order.find();
  return result;
};

const deleteOrderFromDB = async (id: string) => {
  const result = await Order.findByIdAndDelete(id);
  return result;
};

const getRevenue = async () => {
  const result = await Order.aggregate([
    { $group: { _id: null, totalRevenue: { $sum: "$totalPrice" } } },
  ]);
  console.log(result[0].totalRevenue);
  return { TotalRevenue: result[0].totalRevenue };
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  deleteOrderFromDB,
  getRevenue,
};
