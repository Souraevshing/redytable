"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import { navLogo } from "@/constants/images";
import { navbarLinks } from "@/constants/navbar-links";

/**
 * @description `navbar` component common to all pages
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b-2">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center">
            <span className="sr-only">Your Company</span>
            <Image
              src={navLogo}
              alt="Your Company Logo"
              width={180}
              height={180}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <GiHamburgerMenu aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navbarLinks.map((link, index) => {
            const { href, label } = link;

            return (
              <Link
                key={index}
                href={href}
                className="text-base font-medium leading-6 text-neutral-700"
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Log In Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/sign-in"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-10 bg-gray-700/30" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full max-w-sm overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="sr-only">Your Company</span>
              <Image
                src={navLogo}
                alt="Your Company Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <IoClose aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navbarLinks.map((link, index) => {
                  const { href, label } = link;

                  return (
                    <Link
                      key={index}
                      href={href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
              <div className="py-6">
                <Link
                  href="/sign-in"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
