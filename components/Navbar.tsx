"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { navLogo } from "@/constants/images";
import { IoLocationOutline } from "react-icons/io5"; // Import the location icon

/**
 * @description Navbar component common to all pages.
 */
export default function Navbar() {
  const router = useRouter();

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Location Button */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center">
            <Image
              src={navLogo}
              alt="Navigation Logo"
              width={150}
              height={50}
              className="object-contain"
              priority // Ensures logo loads faster.
            />
          </Link>
          {/* Location Button with Icon */}
          <Button variant="outline" className="flex items-center space-x-2 text-gray-700 hover:text-red-500">
            <IoLocationOutline className="w-4 h-4" /> {/* Location icon */}
            <span>Location</span>
          </Button>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          {[
            { href: "/", label: "Home" },
            { href: "/restaurants", label: "Restaurants" },
            // { href: "/booktable", label: "Book a Table" },
            { href: "/contact", label: "Contact Us" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-red-500 font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
        <Button  className="border-2 border-red-500 hover:bg-red-500 bg-white text-gray-700 shadow-sm hover:text-white"
            onClick={() => router.push(`/sign-up`)}>
            Restaurants Registration
          </Button>
          <Button variant="outline" onClick={() => router.push(`/sign-in`)} className="text-gray-700">
            Login
          </Button>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white"
            onClick={() => router.push(`/sign-up`)}
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu (Optional Placeholder) */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => alert("Menu toggled!")}>
            <span className="material-icons">menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
