"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signInUser } from "@/lib/features/signInSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { SignInFormData, SignInSchema } from "@/schemas/SignInSchema";
import { showErrorToast, showPromiseToast } from "@/utils/hooks/useToast";

/**
 * @description `sign-in` user
 */
const SignInUser = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<SignInFormData>({
    resolver: zodResolver(SignInSchema),
  });

  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector((state: RootState) => state.signIn);

  const onSubmit = async (formData: SignInFormData) => {
    if (isValid) {
      try {
        await showPromiseToast(dispatch(signInUser(formData)).unwrap(), {
          loading: "Signing in",
          success: "Sign in success",
          error: " Sign in failed",
        });
        console.log(formData);
        reset();
      } catch (err: unknown) {
        if (err instanceof Error) {
          showErrorToast(error!.message);
        }
        console.error(err);
      }
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="bg-white shadow-md rounded-lg px-8 py-12 w-full max-w-md">
        <div className="mb-8 text-center">
         
          <h1 className="text-3xl font-bold text-gray-800 mt-4">Sign In</h1>
          <p className="text-gray-500 mt-2">Welcome back! Please enter your details.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-700">
              Email or Phone Number
            </label>
            <Input
              id="emailOrPhone"
              type="text"
              placeholder="Enter email or phone number"
              {...register("emailOrPhone")}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors?.emailOrPhone && (
              <div className="mt-2">
                <p className="text-sm text-red-500">
                  Invalid email address or phone number
                </p>
              </div>
            )}
          </div>

          <Button
            type="submit"
            className={`w-full py-3 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            Sign In
          </Button>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link href="/sign-up" className="text-blue-500 hover:text-blue-400 font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInUser;