"use client";

import { toast } from "sonner";

/**
 * Displays an error toast message
 * @param message - The message to be displayed
 * @param options - Optional settings for the toast
 */
export const showErrorToast = (
  message: string,
  options?: {
    description?: string;
    duration?: number; // Duration in milliseconds
  }
) => {
  toast.error(message, {
    description: options?.description,
    duration: options?.duration || 300,
  });
};

/**
 * Displays a success toast message
 * @param message - The message to be displayed
 * @param options - Optional settings for the toast
 */
export const showSuccessToast = (
  message: string,
  options?: {
    description?: string;
    duration?: number; // Duration in milliseconds
  }
) => {
  toast.success(message, {
    description: options?.description,
    duration: options?.duration || 300,
  });
};

/**
 * Displays a toast for a promise
 * @param promise - The promise to track
 * @param messages - An object containing messages for loading, success, and error states
 * @returns The original promise
 */
export const showPromiseToast = async <T>(
  promise: Promise<T>,
  messages: {
    loading: string;
    success: string;
    error: string;
  }
): Promise<T> => {
  try {
    const res = await toast.promise(promise, {
      loading: messages.loading,
      success: messages.success,
      error: messages.error,
      duration: 300,
    });

    return res.unwrap();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { toast };
