"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const validateForm = () => {
    const newErrors = { name: "", mobile: "", email: "" };

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);

    // Return true if no errors, false otherwise
    return !newErrors.name && !newErrors.mobile && !newErrors.email;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      alert("SignUp form submitted successfully!");
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <div className="flex w-4/5 max-w-4xl h-[80vh] overflow-hidden rounded-lg shadow-lg bg-white">
        {/* Left Div with Image */}
        <div className="w-1/2 h-full">
          <Image
            src="/6.jpg" // Replace with your image path
            alt="SignUp Image"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Div with Form */}
        <div className="w-1/2 flex flex-col justify-center p-8">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            Create Your Account!
          </h2>
          <form onSubmit={onSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Your Name
              </label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-2"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Mobile Number Input */}
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <Input
                id="mobile"
                type="text"
                name="mobile"
                placeholder="Your Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                className="mt-2"
              />
              {errors.mobile && (
                <p className="mt-2 text-sm text-red-500">{errors.mobile}</p>
              )}
            </div>

            {/* Gmail Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Gmail Account
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Your Gmail Address"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-2"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white"
            >
              Sign Up
            </Button>

            <p className="text-sm font-medium text-gray-700">
              Already have an account?{" "}
              <Link href="/signin">
                <span className="underline text-base font-bold cursor-pointer">
                  Login
                </span>
              </Link>
            </p>
            {/* Terms and Privacy */}
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
