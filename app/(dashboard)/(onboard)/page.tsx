/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { useQuery } from "react-query";
import { MdLocationPin } from "react-icons/md";
import { customerChoices } from "@/constants/customers-choice";
import { restaurants } from "@/constants/restaurants";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { FaCaretDown, FaCaretUp, FaCrosshairs } from "react-icons/fa";
import {
  FaLeaf,
  FaUtensils,
  FaGift,
  FaHeart,
  FaHamburger,
} from "react-icons/fa";
import Banner from "@/components/banner";
/**
 * @description `filter` restaurants by sending `search query`
 * @param query
 * @returns filtered restaurants by passing search query
 */
const fetchSearchQueryResults = async (query: string) => {
  if (!query) {
    return [];
  }
  const res = await fetch(`/api/search?query=${query}`);
  if (!res.ok) {
    throw new Error("Failed to fetch Restaurants");
  }

  return res.json();
};
interface CategoryItem {
  icon: ReactNode; // Icon component
  label: string; // Text label
}

/**
 * @description `home page` rendered first time the page loads
 */
const OnboardUser = () => {
  const router = useRouter();

  //search query passed inside search bar
  const [searchTerm, setSearchTerm] = useState<string>("");

  // debounce search results
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");

  const [location, setLocation] = useState("Pune");
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Open dropdown when focusing on the input
  const handleFocus = () => {
    setIsOpen(true);
  };

  const detectLocation = () => {
    // Add logic for detecting location using GPS
    console.log("Detecting current location...");
    setLocation("Current Location");
  };

  const {
    data: searchResults = [],
    error,
    isError,
    isFetching,
  } = useQuery(
    ["search", debouncedSearchTerm],
    () => fetchSearchQueryResults(debouncedSearchTerm),
    { enabled: !!debouncedSearchTerm }
  );

  // debounce search results by adding a delay of 300ms
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log(`Searching for: ${debouncedSearchTerm}`);
    }
  }, [debouncedSearchTerm]);

  const categories: CategoryItem[] = [
    {
      icon: <FaHeart className="text-red-500 text-xl" />,
      label: "Pocket Friendly",
    },
    { icon: <FaLeaf className="text-green-500 text-xl" />, label: "Pure Veg" },
    { icon: <FaUtensils className="text-red-500 text-xl" />, label: "Buffet" },
    { icon: <FaGift className="text-red-500 text-xl" />, label: "Must Visit" },
    {
      icon: <FaHamburger className="text-red-500 text-xl" />,
      label: "New Restaurants",
    },
  ];

  return (
    <>
      <div className="relative h-[75vh] bg-cover bg-center bg-[url('/banner.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-bold mb-2">
            Find Your Favorite Meal
          </h1>
          <p className="text-gray-200 text-lg mb-6">
            Discover the best restaurants near you
          </p>
          {/* Bug Hai fix krna hai baad me */}
          <div className="flex justify-center items-center w-full bg-cover h-20 bg-[url('/path-to-background.jpg')]">
            <div className="flex items-center bg-white rounded-md shadow-md px-4 py-2 space-x-2 w-2/3 max-w-4xl">
              {/* Location Section */}

              <div className="relative flex items-center space-x-2">
                <MdLocationPin className="text-red-500 w-7 h-7" />
                <Input
                  type="text"
                  placeholder="Pune"
                  className="w-full border-none focus:outline-none focus:ring-0"
                  onFocus={handleFocus}
                />
                {isOpen ? (
                  <FaCaretUp
                    className="text-gray-500 cursor-pointer"
                    onClick={toggleDropdown}
                  />
                ) : (
                  <FaCaretDown
                    className="text-gray-500 cursor-pointer"
                    onClick={toggleDropdown}
                  />
                )}
                {/* Dropdown content */}
                {isOpen && (
                  <div className="absolute -left-6 top-full mt-3 w-[281px] bg-white border rounded-lg shadow-md p-4 z-10">
                    <div className="flex items-center gap-3">
                      <FaCrosshairs className="text-red-500" />
                      <div>
                        <p className="text-red-500 font-medium">
                          Detect current location
                        </p>
                        <p className="text-sm text-gray-500">Using GPS</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="h-5 border-l border-gray-300 mx-2"></div>

              {/* Search Section */}
              <div className="flex-grow flex items-center space-x-2">
                <FiSearch className="text-red-500 w-7 h-7" />
                <Input
                  type="text"
                  placeholder="Search for restaurant, cuisine or a dish"
                  className="w-full border-none focus:outline-none focus:ring-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:mt-3 md:mt-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:shadow-lg transition-all cursor-pointer"
          >
            {category.icon}
            <span className="text-sm font-medium text-gray-700">
              {category.label}
            </span>
          </div>
        ))}
      </div>

      {/* Restaurants section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Restaurants Near You</h2>
          <Link href="/restaurants" className="text-blue-500 hover:underline">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant, index) => {
            const { name, imageUrl, location, rating } = restaurant;

            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                onClick={() => router.push(`/restaurants/${index + 1}`)}
              >
                <Image
                  src={imageUrl}
                  alt={name}
                  width={400}
                  height={200}
                  className="object-cover w-full h-56"
                />
                <div className="p-4 border-red-500 flex">
                  <div className="w-3/4">
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="text-gray-600 text-sm">{location}</p>
                  </div>
                  <div className="border-green-400 w-1/4">
                    <div className="rounded-md bg-green-800 text-white px-[11px]">
                      <span className="text-xl font-semibold items-center">
                        {rating}
                        <FaStar className="inline w-5 h-5 -mt-2 mx-1" />
                      </span>
                    </div>
                    <h2 className="text-[13px] font-semibold text-center mt-1">
                      ₹200 for two
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

{/* Banner Section */}
<Banner />

      {/* customers choice section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">
          What Are You Looking For ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customerChoices.map((choices, index) => {
            const { name, imageUrl } = choices;

            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  src={imageUrl}
                  alt={name}
                  width={400}
                  height={200}
                  className="object-cover w-full h-56"
                />
                <div className="p-4 border-red-500 flex">
                  <div className="w-3/4">
                    <h3 className="text-lg font-bold">{name}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Restaurants Chosen For You</h2>
          <Link href="/restaurants" className="text-blue-500 hover:underline">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant, index) => {
            const { name, imageUrl, location, rating } = restaurant;

            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                onClick={() => router.push(`/restaurants/${index + 1}`)}
              >
                <Image
                  src={imageUrl}
                  alt={name}
                  width={400}
                  height={200}
                  className="object-cover w-full h-56"
                />
                <div className="p-4 border-red-500 flex">
                  <div className="w-3/4">
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="text-gray-600 text-sm">{location}</p>
                  </div>
                  <div className="border-green-400 w-1/4">
                    <div className="rounded-md bg-green-800 text-white px-[11px]">
                      <span className="text-xl font-semibold items-center">
                        {rating}
                        <FaStar className="inline w-5 h-5 -mt-2 mx-1" />
                      </span>
                    </div>
                    <h2 className="text-[13px] font-semibold text-center mt-1">
                      ₹200 for two
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OnboardUser;
