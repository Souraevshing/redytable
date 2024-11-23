"use client";

import { z } from "zod";

/**
 * @description `schema` for `validating` `sign-up` form
 */
export const SignUpSchema = z.object({
  name: z
    .string()
    .min(5, { message: "Name must be at least 5 characters" })
    .max(50, { message: "Name must not exceed 50 characters" })
    .regex(/^[a-zA-Z\s]+$/, { message: "Name must contain only alphabets" }),

  mobile: z.string().regex(/^[0-9]{10}$/, {
    message: "Mobile number must be exactly 10 digits",
  }),

  email: z
    .string()
    .email({ message: "Invalid email address" })
    .max(100, { message: "Email must not exceed 100 characters" }),
});

// Type for use in form components
export type SignUpFormData = z.infer<typeof SignUpSchema>;
