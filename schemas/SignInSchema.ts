import { z } from "zod";

export const SignInSchema = z.object({
  emailOrPhone: z
    .string()
    .email({ message: "Invalid email address" })
    .max(100, { message: "Email must not exceed 100 characters" }),
});

// Type for the Sign In form
export type SignInFormData = z.infer<typeof SignInSchema>;
