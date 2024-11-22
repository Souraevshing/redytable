"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Images } from "@/constants";
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
  const { loading, error } = useSelector<RootState, SignUpState>(
    (state: RootState) => state.signUp
  );

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
            src={Images.dashboardLogo5}
            alt="login_logo"
            width={1000}
            height={1000}
            className="h-full w-full object-cover sm:hidden"
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
                className="block text-sm font-medium text-gray-700"
              >
                Enter mobile no or email
              </label>
              <Input
                id="emailOrPhone"
                type="text"
                placeholder="Enter your Mobile no. or Gmail Address"
                {...register("emailOrPhone")}
                className="mt-2"
              />

              {/* display errors if validation fails */}
              {errors && (
                <p className="mt-2 text-sm text-red-500">
                  {errors?.emailOrPhone?.message}
                </p>
              )}
            </div>

            {/* SignIn button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-red-500 hover:bg-red-600 text-white"
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
