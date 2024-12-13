import { dashboardLogo5 } from "@/constants/images";
import Image from "next/image";

const SideAuth = () => {
  return (
    <div className="hidden lg:block w-1/2 h-screen relative overflow-hidden">
      <Image
        src={dashboardLogo5}
        alt="login_background"
        fill
        className="object-cover absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>
    </div>
  );
};

export default SideAuth;