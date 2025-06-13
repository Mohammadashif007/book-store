import { TProduct } from "./product.interface";
import { Products } from "./product.model";

const createStudentIntoDB = async (product: TProduct) => {
  const result = await Products.create(product);
  return result;
};

const getAllProducts = async () => {
  const result = await Products.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Products.findById(id);
  return result;
};

const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await Products.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteSingleProductFromDB = async (id: string) => {
  const result = await Products.findByIdAndDelete(id);
  return result;
};

export const ProductServices = {
  createStudentIntoDB,
  getAllProducts,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteSingleProductFromDB,
};
