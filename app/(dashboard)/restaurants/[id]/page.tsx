"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Images } from "@/constants";
import {
  dashboardLogo3,
  dashboardLogo4,
  dashboardLogo5,
} from "@/constants/images";

export default function RestaurantDetails() {
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col items-center w-full">
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 relative">
              <Image
                src={dashboardLogo3}
                alt="Restaurant Interior"
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
              <Image
                src={dashboardLogo4}
                alt="Restaurant Interior"
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
                      src={dashboardLogo5}
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
                      Images.dashboardLogo1,
                      Images.dashboardLogo2,
                      Images.dashboardLogo3,
                      Images.dashboardLogo4,
                      Images.dashboardLogo5,
                    ].map((img, index) => {
                      const { src } = img;

                      return (
                        <Image
                          key={index}
                          src={src}
                          alt={`Restaurant ${index + 1}`}
                          width={300}
                          height={200}
                          className="rounded-lg object-cover w-[300px] h-[300px]"
                        />
                      );
                    })}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
