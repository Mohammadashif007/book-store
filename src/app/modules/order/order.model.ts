import { model, Schema, Types } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>(
  {
    email: { type: String, required: true },
    product: { type: Types.ObjectId, ref: "Products", required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true },
);

export const Order = model<TOrder>("Orders", orderSchema);
