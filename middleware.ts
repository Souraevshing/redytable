/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  try {
    return NextResponse.next(); // Proceed with the request if no error
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Config to apply middleware to specific routes (if needed)
export const config = {
  matcher: "/",
};
