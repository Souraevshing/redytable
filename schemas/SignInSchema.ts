import { z } from "zod";

/**
 * @description `schema` for `validating` `sign-in` form
 */
export const SignInSchema = z.object({
  emailOrPhone: z
    .string()
    .email({ message: "Invalid email address" })
    .max(100, { message: "Email must not exceed 100 characters" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(100, { message: "Password must not exceed 100 characters" }),
});

// Type for the Sign In form
export type SignInFormData = z.infer<typeof SignInSchema>;