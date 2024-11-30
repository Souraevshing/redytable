import { NextRequest, NextResponse } from "next/server";

import { ApiError, apiHandler } from "@/lib/api-utils";

/**
 * Handles user signup requests
 * @param req NextRequest
 * @returns NextResponse
 */
export async function POST(req: NextRequest) {
  return apiHandler(async () => {
    // Extracting request body
    const { username, email, phoneNumber } = await req.json();

    // Validate the input data
    if (!username || !email || !phoneNumber) {
      throw new ApiError(400, "All fields are mandatory");
    }

    try {
      const res = await fetch(
        `http://localhost:7884/rest/v1/api/auth/create-account`,
        {
          method: "POST",
          body: JSON.stringify({ username, email, phoneNumber }),
          headers: { "Content-Type": "application/json" },
        }
      );

      // throw error for error response
      if (!res.ok) {
        throw new ApiError(res.status, await res.text());
      }

      // Return success response
      return NextResponse.json(
        {
          message: "User signed up successfully!",
        },
        { status: res.status }
      );
    } catch (error) {
      console.error("Error during signup:", error);

      if (error instanceof ApiError) {
        throw error;
      }

      throw new ApiError(500, "Internal server error");
    }
  });
}
