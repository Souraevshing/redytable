"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { dashboardLogo5 } from "@/constants/images";
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
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <div className="flex w-4/5 max-w-4xl h-[80vh] overflow-hidden rounded-lg shadow-lg bg-white">
        <div className="w-1/2 h-full">
          <Image
            src={dashboardLogo5}
            alt="login_logo"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-1/2 flex flex-col justify-center p-8">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            Welcome Back!
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email/Phone Field */}
            <div>
              <label
                htmlFor="emailOrPhone"
                id="emailOrPhone"
                className="block text-sm font-medium text-gray-700 outline-none"
              >
                Enter email or phone number
              </label>
              <Input
                id="emailOrPhone"
                type="text"
                placeholder="Enter email or phone number"
                {...register("emailOrPhone")}
                className="mt-2 outline-none"
              />

              {errors?.emailOrPhone && (
                <div className="mt-2">
                  {/* Display both email and phone validation error messages */}
                  {errors.emailOrPhone.message?.includes("email") && (
                    <p className="text-sm text-red-500">
                      Invalid email address or phone number
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* SignIn button */}
            <Button
              type="submit"
              className={`w-full bg-red-500 hover:bg-red-600 text-white`}
            >
              Submit
            </Button>

            <p className="text-sm font-medium text-gray-700">
              Don&apos;t have an account?
              <Link href="/sign-up">
                <span className="underline text-base font-bold cursor-pointer">
                  SignUp
                </span>
              </Link>
            </p>

            {/* terms and conditions */}
            <p className="text-sm font-medium text-gray-700">
              By continuing, you agree to the{" "}
              <span className="underline text-base font-bold cursor-pointer">
                Terms of Use
              </span>{" "}
              and{" "}
              <span className="underline text-base font-bold cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInUser;
