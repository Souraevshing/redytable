import { NextRequest, NextResponse } from "next/server";

/**
 * Handles user signup requests
 * @param req NextRequest
 * @returns NextResponse
 */
export async function POST(req: NextRequest) {
  try {
    // Extracting request body
    const { username, email, phoneNumber } = await req.json();

    // Validate the input data
    if (!username || !email || !phoneNumber) {
      return NextResponse.json(
        { error: "All fields (username, email, phoneNumber) are required." },
        { status: 400 }
      );
    }
    const res = await fetch(
      `http://localhost:7884/rest/v1/api/auth/create-account`,
      {
        method: "POST",
        body: JSON.stringify({ username, email, phoneNumber }),
        headers: { "Content-Type": "application/json" },
      }
    );

    // Return success response
    return NextResponse.json(
      {
        message: "User signed up successfully!",
      },
      { status: res.status }
    );
  } catch (error) {
    console.error("Error during signup:", error);

    return NextResponse.json(
      {
        error: "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
