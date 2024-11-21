"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { useRouter } from "next/navigation";

type Restaurant = {
  name: string;
  location: string;
  imageUrl: string;
  rating: number;
};
type Data = {
  name: string;
  imageUrl: string;
};

export default function Home() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const restaurants: Restaurant[] = [
    {
      name: "My Bar Headquarters",
      location: "Connaught Place, Central Delhi",
      imageUrl: "/interior/interior_8.jpg", // Placeholder for actual image paths
      rating: 4.5,
    },
    {
      name: "The G.T. Road",
      location: "Connaught Place, Central Delhi",
      imageUrl: "/interior/interior_5.jpg",
      rating: 4.3,
    },
    {
      name: "Sandoz",
      location: "Connaught Place, Central Delhi",
      imageUrl: "/interior/interior_3.jpg",
      rating: 3.9,
    },
    {
      name: "Barbeque Nation",
      location: "Connaught Place, Central Delhi",
      imageUrl: "/table/barbeque.jpg",
      rating: 4.3,
    },
  ];
  // const restaurantsForYou: Restaurant[] = [
  //   {
  //     name: "My Bar Headquarters",
  //     location: "Connaught Place, Central Delhi",
  //     imageUrl: "/interior/interior_8.jpg", // Placeholder for actual image paths
  //     rating: 4.5,
  //   },
  //   {
  //     name: "The G.T. Road",
  //     location: "Connaught Place, Central Delhi",
  //     imageUrl: "/interior/interior_5.jpg",
  //     rating: 4.3,
  //   },
  //   {
  //     name: "Sandoz",
  //     location: "Connaught Place, Central Delhi",
  //     imageUrl: "/interior/interior_3.jpg",
  //     rating: 3.9,
  //   },
  //   {
  //     name: "Barbeque Nation",
  //     location: "Connaught Place, Central Delhi",
  //     imageUrl: "/table/barbeque.jpg",
  //     rating: 4.3,
  //   },
  // ];
  const data: Data[] = [
    {
      name: "Party Vibes",
      imageUrl: "/1.jpg", // Placeholder for actual image paths
    },
    {
      name: "Drink and Dine",
      imageUrl: "/interior/interior_bar.jpg",
    },
    {
      name: "Breakfast",
      imageUrl: "/3.jpg",
    },
    {
      name: "Cafes",
      imageUrl: "/interior/interior_4.jpg",
    },
    {
      name: "Premium Dining",
      imageUrl: "/table/table_1.jpg", // Placeholder for actual image paths
    },
    {
      name: "Event Experiences",
      imageUrl: "/2.jpg",
    },
    {
      name: "Romantic Dining",
      imageUrl: "/table/table_4.jpg",
    },
    {
      name: "Family Dining",
      imageUrl: "/4.jpg",
    },
  ];

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for:", query);
    // Implement search logic here
  };

  return (
    <>
      {/* <Navbar /> */}
      <div
        className="relative h-[75vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          {/* Add your text here */}
          <h1 className="text-white text-4xl font-bold mb-2">
            Find Your Favorite Meal
          </h1>
          <p className="text-gray-200 text-lg mb-6">
            Discover the best restaurants near you
          </p>

          <form
            onSubmit={handleSearch}
            className="w-full max-w-xl p-2 bg-black bg-opacity-40 rounded-md shadow-lg"
          >
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FiSearch size={20} className="text-red-500" />
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for Restaurants, Cuisines, Location ..."
                className="w-full p-3 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* REsturanets near you */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Restaurants Near You</h2>
          <Link href="/restaurants" className="text-blue-500 hover:underline">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              onClick={() => router.push(`/restaurants/${index + 1}`)}
            >
              <Image
                src={restaurant.imageUrl}
                alt={restaurant.name}
                width={400}
                height={200}
                className="object-cover w-full h-56"
              />
              <div className="p-4 border-red-500 flex">
                <div className="w-3/4">
                  <h3 className="text-lg font-bold">{restaurant.name}</h3>
                  <p className="text-gray-600 text-sm">{restaurant.location}</p>
                </div>
                <div className="border-green-400 w-1/4">
                  <div className="rounded-md bg-green-800 text-white px-[11px]">
                    <span className="text-xl font-semibold items-center">
                      {restaurant.rating}
                      <FaStar className="inline w-5 h-5 -mt-2 mx-1" />
                    </span>
                  </div>
                  <h2 className="text-[13px] font-semibold text-center mt-1">
                    ₹200 for two
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* what are you looking for */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">
          What Are You Looking For ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={img.imageUrl}
                alt={img.name}
                width={400}
                height={200}
                className="object-cover w-full h-56"
              />
              <div className="p-4 border-red-500 flex">
                <div className="w-3/4">
                  <h3 className="text-lg font-bold">{img.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Restaurants Chosen for You */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Restaurants Chosen For You</h2>
          <Link href="/restaurants" className="text-blue-500 hover:underline">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              onClick={() => router.push(`/restaurants/${index + 1}`)}
            >
              <Image
                src={restaurant.imageUrl}
                alt={restaurant.name}
                width={400}
                height={200}
                className="object-cover w-full h-56"
              />
              <div className="p-4 border-red-500 flex">
                <div className="w-3/4">
                  <h3 className="text-lg font-bold">{restaurant.name}</h3>
                  <p className="text-gray-600 text-sm">{restaurant.location}</p>
                </div>
                <div className="border-green-400 w-1/4">
                  <div className="rounded-md bg-green-800 text-white px-[11px]">
                    <span className="text-xl font-semibold items-center">
                      {restaurant.rating}
                      <FaStar className="inline w-5 h-5 -mt-2 mx-1" />
                    </span>
                  </div>
                  <h2 className="text-[13px] font-semibold text-center mt-1">
                    ₹200 for two
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
