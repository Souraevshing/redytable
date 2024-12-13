"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ScrollLockWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/sign-in" || pathname === "/sign-up") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Reset for other pages
    }
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollLockWrapper;
