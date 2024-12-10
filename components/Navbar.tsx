"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { navLogo } from "@/constants/images";
import { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * @description `navbar` component common to all pages
 */
export default function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold text-red-500">
        <Image src={navLogo} alt="nav_logo" width={120} height={100} />
      </Link>

      {/* for desktop */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link
          href="/"
          className="text-foreground hover:text-muted-foreground"
        >
          Home
        </Link>
        <Link
          href="/restaurants/book"
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

      {/* hamburger icon*/}
      <div className="md:hidden">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* normal */}
      <div className="hidden md:flex items-center space-x-4">
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

      {/* sm or md mode */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="container mx-auto px-4 py-4">
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute top-4 right-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="flex flex-col items-center justify-center h-full space-y-6 mt-12">
              <Link
                href="/"
                className=" text-foreground hover:text-muted-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/restaurants/book"
                className="text-foreground hover:text-muted-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a table
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-muted-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact us
              </Link>

              <div className="pt-8 space-y-4 w-full px-8">
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => {
                    router.push(`/sign-in`);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Login
                </Button>
                <Button
                  className="bg-red-500 hover:bg-red-600 text-white w-full"
                  onClick={() => {
                    router.push(`/sign-up`);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </header>
  );
}
