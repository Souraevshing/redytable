"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { navLogo } from "@/constants/images";
import { useRouter } from "next/navigation";

/**
 * @description `navbar` component common to all pages
 */
export default function Navbar() {
  const router = useRouter();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-red-500">
          <Image src={navLogo} alt="nav_logo" width={200} height={200} />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-foreground hover:text-muted-foreground"
          >
            Home
          </Link>
          <Link
            href="/book"
            className="text-foreground hover:text-muted-foreground"
          >
            Book a table
          </Link>
          <Link
            href="/contact"
            className="text-foreground hover:text-muted-foreground"
          >
            Contact us
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={() => router.push(`/sign-in`)}>
            Login
          </Button>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white"
            onClick={() => router.push(`/sign-up`)}
          >
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}
