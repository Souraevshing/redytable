"use client";

import Image from "next/image";

import { bannerLogo } from "@/constants/images";

const Navbar = () => {
  return (
    <div className="bg-white text-black w-full h-auto p-0">
      <Image src={bannerLogo} width={200} height={200} alt="main_logo" />
    </div>
  );
};

export default Navbar;
