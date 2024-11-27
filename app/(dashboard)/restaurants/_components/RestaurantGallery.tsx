import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  interiorLogo3,
  interiorLogo4,
  interiorLogo5,
} from "@/constants/images";

/**
 * @description display restaurants images inside a `gallery` with infinite swipe
 */
export default function RestaurantGallery() {
  return (
    <div className="grid grid-cols-3 gap-4 h-[400px]">
      <div className="col-span-2 relative rounded-lg overflow-hidden">
        <Image
          src={interiorLogo3}
          alt="Restaurant interior"
          className="object-cover"
          fill
        />
      </div>
      <div className="space-y-4">
        <div className="relative h-[192px] rounded-lg overflow-hidden">
          <Image
            src={interiorLogo4}
            alt="Restaurant interior"
            className="object-cover"
            fill
          />
        </div>
        <div className="relative h-[192px] rounded-lg overflow-hidden">
          <Image
            src={interiorLogo5}
            alt="Restaurant interior"
            className="object-cover"
            fill
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Button variant="outline" className="text-white">
              View Gallery
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
