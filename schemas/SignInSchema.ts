import { z } from "zod";

export const SignInSchema = z.object({
  emailOrPhone: z
    .string()
    .refine(
      (value) => /^\S+@\S+\.\S+$/.test(value) || /^[0-9]{10,15}$/.test(value),
      {
        message:
          "Input must be a valid email address or a phone number (10-15 digits).",
      }
    ),
});

export type SignInFormData = z.infer<typeof SignInSchema>;
