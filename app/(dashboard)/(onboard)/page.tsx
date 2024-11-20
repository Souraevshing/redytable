/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { useQuery } from "react-query";

import { customerChoices } from "@/constants/customers-choice";
import { restaurants } from "@/constants/restaurants";

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

/**
 * @description `home page` rendered first time the page loads
 */
const OnboardUser = () => {
  //search query passed inside search bar
  const [searchTerm, setSearchTerm] = useState<string>("");

  // debounce search results
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");

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

          <form className="w-full max-w-xl p-2 bg-black bg-opacity-40 rounded-md shadow-lg">
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FiSearch size={20} className="text-red-500" />
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for Restaurants, Cuisines, Location ..."
                className="w-full p-3 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Search
              </button>
            </div>
          </form>
        </div>
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
