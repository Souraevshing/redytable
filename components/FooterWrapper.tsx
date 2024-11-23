"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

/**
 * @description Conditionally renders the `Footer` component based on the route.
 */
export default function FooterWrapper() {
  const pathname = usePathname();
  const excludedRoutes = ["/sign-in", "/sign-up"];

  // Check if the current pathname matches any of the excluded routes
  const isExcluded = excludedRoutes.some((route) => pathname === route);

  if (isExcluded) {
    return null;
  }

  return <Footer />;
}
