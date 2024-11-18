"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Component() {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center w-full">
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 relative">
              <Image
                src="/3.jpg"
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
                src="/4.jpg"
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
                      src="/5.jpg"
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
                    {["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"].map(
                      (imgSrc, index) => (
                        <Image
                          key={index}
                          src={imgSrc}
                          alt={`Restaurant Image ${index + 1}`}
                          width={300}
                          height={200}
                          className="rounded-lg object-cover w-[300px] h-[300px]"
                        />
                      )
                    )}
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
