"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { dashboardLogo6 } from "@/constants/images";
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
  const { loading, error } = useSelector<RootState, SignUpState>(
    (state: RootState) => state.signUp
  );

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
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <div className="flex w-4/5 max-w-4xl h-[80vh] overflow-hidden rounded-lg shadow-lg bg-white">
        <div className="w-1/2 h-full">
          <Image
            src={dashboardLogo6}
            alt="sign_up"
            width={1000}
            height={1000}
            className="h-full w-full object-cover sm:hidden"
          />
        </div>

        {/* create account section */}
        <div className="w-1/2 flex flex-col justify-center p-8">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            Create Your Account!
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* enter name */}
            <div>
              <label
                htmlFor="name"
                id="name"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Your Name
              </label>

              <Input
                id="name"
                type="text"
                placeholder="Enter name"
                {...register("name")}
                className="mt-2"
              />

              {/* display errors if validation fails */}
              {errors.name && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* enter mobile no */}
            <div>
              <label
                htmlFor="mobile"
                id="mobile"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <Input
                id="mobile"
                type="tel"
                placeholder="Your Mobile Number"
                {...register("mobile")}
                className="mt-2"
              />

              {/* display errors if validation fails */}
              {errors.mobile && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.mobile.message}
                </p>
              )}
            </div>

            {/* enter email */}
            <div>
              <label
                htmlFor="email"
                id="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Email address"
                {...register("email")}
                className="mt-2"
              />

              {/* display errors if validation fails */}
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* SignUp button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-red-500 hover:bg-red-600 text-white"
            >
              Sign Up
            </Button>

            <p className="text-sm font-medium text-gray-700">
              Already have an account?{" "}
              <Link href="/sign-in">
                <span className="underline text-base font-bold cursor-pointer">
                  Login
                </span>
              </Link>
            </p>

            {/* terms and conditions */}
            <p className="text-sm font-medium text-gray-700">
              By signing up, you agree to the{" "}
              <span className="underline text-base font-bold cursor-pointer">
                Terms of Use
              </span>{" "}
              and{" "}
              <span className="underline text-base font-bold cursor-pointer">
                Privacy Policy
              </span>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
