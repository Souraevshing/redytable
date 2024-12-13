"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signUpUser } from "@/lib/features/signUpSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { SignUpFormData, SignUpSchema } from "@/schemas/SignUpSchema";
import { showErrorToast, showPromiseToast } from "@/utils/hooks/useToast";

/**
 * @description `sign-up` user
 */
const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<SignUpFormData>({ resolver: zodResolver(SignUpSchema) });

  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector((state: RootState) => state.signUp);

  const onSubmit = async (formData: SignUpFormData) => {
    if (isValid) {
      try {
        await showPromiseToast(dispatch(signUpUser(formData)).unwrap(), {
          loading: "Signing up",
          success: "Sign up success",
          error: " Sign up failed",
        });
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
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="bg-white shadow-md rounded-lg px-8 py-12 w-full max-w-md">
        <div className="mb-8 text-center">
       
          <h1 className="text-3xl font-bold text-gray-800 mt-4">Sign Up</h1>
          <p className="text-gray-500 mt-2">Create your account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Enter name"
              {...register("name")}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <div className="mt-2">
                <p className="text-sm text-red-500">{errors.name.message}</p>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <Input
              id="mobile"
              type="tel"
              placeholder="Enter mobile number"
              {...register("mobile")}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.mobile && (
              <div className="mt-2">
                <p className="text-sm text-red-500">{errors.mobile.message}</p>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email"
              {...register("email")}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <div className="mt-2">
                <p className="text-sm text-red-500">{errors.email.message}</p>
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="w-full py-3 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </Button>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-blue-500 hover:text-blue-400 font-medium">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;