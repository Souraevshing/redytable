import Image from "next/image";

import { Images } from "@/constants";

const Navbar = () => {
  return (
    <div className="bg-white text-black w-full h-auto p-0">
      <Image src={Images.bannerLogo} width={200} height={200} alt="main_logo" />
    </div>
  );
};

export default Navbar;
