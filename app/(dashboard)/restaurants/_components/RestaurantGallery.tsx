"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  interiorLogo1,
  interiorLogo2,
  interiorLogo3,
  interiorLogo4,
  interiorLogo5,
  interiorLogo6,
  interiorLogo7,
  interiorLogo8,
  interiorLogo9,
} from "@/constants/images";
import { useState } from "react";
import { Heart } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

/**
 * @description display restaurants images inside a `gallery` with infinite swipe
 */
export default function RestaurantGallery() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  return (
    <section className="py-6">
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 relative">
        <Image
          src={interiorLogo3}
          alt="Restaurant interior"
          width={800}
          height={400}
          className="rounded-lg object-cover w-full h-[400px]"

        />
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart
              className={`w-4 h-4 ${
              isWishlisted ? "fill-red-500 text-red-500" : ""
              }`}
            />
          </Button>
      </div>
      <div className="grid gap-4">
        {/* <div className="relative h-[192px]"> */}
          <Image
            src={interiorLogo4}
            alt="Restaurant interior"
            width={400}
            height={190}
            className="rounded-lg object-cover w-full h-[190px]"
          />
        <Dialog>
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <DialogTrigger asChild>
            <div className="relative cursor-pointer">
              <Image
                src={interiorLogo5}
                alt="Restaurant Interior"
                width={400}
                height={190}
                className="rounded-lg object-cover w-full h-[190px] blur-[1px]"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                View More
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-6xl h-[50vh]">
            <div className="flex overflow-x-auto space-x-4 p-4">
              {[
                interiorLogo1,
                interiorLogo2,
                interiorLogo3,
                interiorLogo4,
                interiorLogo5,
                interiorLogo6,
                interiorLogo7,
                interiorLogo8,
                interiorLogo9
                ].map((imgSrc, index) => (
                  <Image
                    key={index}
                    src={imgSrc}
                    alt={`Restaurant Image ${index + 1}`}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-[300px] h-[300px]"
                  />
                ))}
              </div>
            </DialogContent>
          </Dialog>
      </div>
      </div>

    </section>
  );
}

