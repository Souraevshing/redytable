"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const validateInput = () => {
    if (!inputValue) {
      return "This field is required.";
    }
    if (!/^\d{10}$/.test(inputValue) && !/\S+@\S+\.\S+/.test(inputValue)) {
      return "Enter a valid mobile number or email address.";
    }
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateInput();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    alert("Form submitted successfully!");
    // Handle the form submission logic here.
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <div className="flex w-4/5 max-w-4xl h-[80vh] overflow-hidden rounded-lg shadow-lg bg-white">
        {/* Left Div with Image */}
        <div className="w-1/2 h-full">
          <Image
            src="/5.jpg" // Replace with your image path
            alt="Login Illustration"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Div with Form */}
        <div className="w-1/2 flex flex-col justify-center p-8">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            Welcome Back!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input Field */}
            <div>
              <label
                htmlFor="loginInput"
                className="block text-sm font-medium text-gray-700"
              >
                Enter your Mobile No. or Gmail Address
              </label>
              <Input
                id="loginInput"
                type="text"
                placeholder="Enter your Mobile no. or Gmail Address"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="mt-2"
              />
              {error && (
                <p className="mt-2 text-sm text-red-500">{error}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white"
            >
              Submit
            </Button>

            {/* Links */}
            <p className="text-sm font-medium text-gray-700">
              Don&apos;t have an account?{" "}
              <Link href="/signup">
                <span className="underline text-base font-bold cursor-pointer">
                  SignUp
                </span>
              </Link>
            </p>

            {/* Terms and Privacy */}
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

export default Login;
