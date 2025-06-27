import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>(
  {
    userId: {type: Schema.Types.ObjectId, ref: "Users"},
    product: { type: Schema.Types.ObjectId, ref: "Products", required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number },
  },
  { timestamps: true },
);

export const Order = model<TOrder>("Orders", orderSchema);
