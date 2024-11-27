import { NextRequest, NextResponse } from "next/server";

/**
 * Handles user signin requests
 * @param req NextRequest
 * @returns NextResponse
 */
export async function POST(req: NextRequest) {
  try {
    // Extracting request body
    const { emailOrPhone } = await req.json();

    // Validate the input data
    if (!emailOrPhone) {
      return NextResponse.json(
        { error: "Email or phone is required." },
        { status: 400 }
      );
    }
    const res = await fetch(
      `http://localhost:7884/rest/v1/api/auth/verify-E?otpInput=${emailOrPhone}`,
      {
        method: "POST",
        body: JSON.stringify({ emailOrPhone }),
        headers: { "Content-Type": "application/json" },
      }
    );

    // Return success response
    return NextResponse.json(
      {
        message: "User signed in successfully!",
      },
      { status: res.status }
    );
  } catch (error) {
    console.error("Error during signin:", error);

    return NextResponse.json(
      {
        error: "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
