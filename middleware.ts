import { NextResponse } from "next/server";

export function middleware() {
  // You can add any global middleware logic here
  // For example, you might want to add headers or check authentication

  // For now, we'll just pass the request through
  return NextResponse.next();
}

// Optionally, you can specify which routes this middleware applies to
export const config = {
  matcher: "/api/:path*",
};
