import { z } from "zod";

export const SignInSchema = z.object({
  emailOrPhone: z
    .string()
    .refine(
      (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || /^\d{10}$/.test(value),
      { message: "Enter a valid email or 10-digit phone number" }
    ),
});

// Type for the Sign In form
export type SignInFormData = z.infer<typeof SignInSchema>;
