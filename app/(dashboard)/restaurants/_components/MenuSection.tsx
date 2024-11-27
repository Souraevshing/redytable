import Image from "next/image";

import { interiorLogo2 } from "@/constants/images";

/**
 * display `menu section` for single restaurant
 */
export default function MenuSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Menu</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2].map((item) => (
          <div key={item} className="border rounded-lg overflow-hidden">
            <Image
              src={interiorLogo2}
              alt="Menu page"
              width={100}
              height={100}
              className="w-full"
            />
            <div className="p-2 text-center text-sm">
              <p>{item} Pages</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
