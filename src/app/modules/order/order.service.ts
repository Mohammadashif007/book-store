import { Products } from "../product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = async (order: TOrder) => {
  const product = await Products.findById(order.product);
  console.log(product);
  if (product?.quantity >= order.quantity) {
    const updatedProductQuantity = product?.quantity - order.quantity;
    const result = await Order.create(order);
    if (updatedProductQuantity === 0) {
      await Products.findByIdAndUpdate(
        order.product,
        { inStock: false },
        { new: true },
      );
    }
    await Products.findByIdAndUpdate(
      order.product,
      { quantity: updatedProductQuantity },
      { new: true },
    );
    return result;
  }
  return "insufficient product quantity";
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
  const result = await Order.find();
  const totalPrice = result.quantity * result.price;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  deleteOrderFromDB,
  getRevenue
};
