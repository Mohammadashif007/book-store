import { z } from "zod";

export const orderValidation = z.object({
  userId: z.string(),
  product: z.string(),
  quantity: z.number(),
  totalPrice: z.number(),
});
