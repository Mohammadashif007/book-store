import { z } from "zod";

export const validateUser = z.object({
  fullName: z.string({ required_error: "Name is required" }),
  userRole: z.enum(["user", "admin"], {
    required_error: "User Role is required",
    invalid_type_error: "User must be either 'admin 'or 'user'",
  }),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email formate"),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Password must be at least 8 characters")
    .max(12, "Password must be at most 12 characters"),
});


