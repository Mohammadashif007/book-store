import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>(
  {
    email: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: "Products", required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number },
  },
  { timestamps: true },
);

export const Order = model<TOrder>("Orders", orderSchema);
