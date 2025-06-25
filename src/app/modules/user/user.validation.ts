import { z } from "zod";

export const validateUser = z.object({
  fullName: z.string({ required_error: "Name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email formate"),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Password must be at least 8 characters")
    .max(12, "Password must be at most 12 characters"),
});
