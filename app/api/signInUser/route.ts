import { NextRequest, NextResponse } from "next/server";

import { ApiError } from "@/lib/api-utils";

/**
 * Handles user signin requests
 * @param req NextRequest
 * @returns NextResponse
 */
export async function POST(req: NextRequest) {
  // Extracting request body
  const { emailOrPhone } = await req.json();

  // Validate the input data
  if (!emailOrPhone) {
    throw new ApiError(400, "All fields are mandatory");
  }

  try {
    const res = await fetch(
      `http://localhost:7884/rest/v1/api/auth/verify-E?otpInput=${emailOrPhone}`,
      {
        method: "POST",
        body: JSON.stringify({ emailOrPhone }),
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
        message: "User signed in successfully!",
      },
      { status: res.status }
    );
  } catch (error) {
    console.error("Error during signin:", error);

    if (error instanceof ApiError) {
      throw error;
    }

    throw new ApiError(500, "Internal server error");
  }
}
