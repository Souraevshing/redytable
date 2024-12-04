"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Banner {
  id: number;
  image: string;
  alt: string;
}

const Banner: React.FC = () => {
  const banners: Banner[] = [
    { id: 1, image: "/banner/1.png", alt: "Banner 1" },
    { id: 2, image: "/banner/2.png", alt: "Banner 2" },
    { id: 3, image: "/banner/3.png", alt: "Banner 3" },
    { id: 4, image: "/banner/4.png", alt: "Banner 4" },
    { id: 5, image: "/banner/5.png", alt: "Banner 5" },
    { id: 6, image: "/banner/6.png", alt: "Banner 6" },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Auto-scroll timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [banners.length]);

  const handleDotClick = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      {/* Banner Images */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="min-w-full">
            <Image
              src={banner.image}
              alt={banner.alt}
              width={800}
              height={300}
              className="w-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Dots Indicators */}
      <div className="flex justify-center mt-2 space-x-2">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full ${
              index === currentIndex ? "bg-red-500 w-6" : "bg-gray-400 w-2.5"
            } cursor-pointer`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
