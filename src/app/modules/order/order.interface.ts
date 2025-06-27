import { Schema, Types } from "mongoose";

export type TOrder = {
  userId: Schema.Types.ObjectId | string;
  product: Types.ObjectId | string;
  quantity: number;
  totalPrice: number;
};
