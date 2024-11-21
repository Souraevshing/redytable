"use client";

import Image from "next/image";
import { useState } from "react";
import { FaCalendarAlt, FaClock, FaStar, FaUser } from "react-icons/fa";
type Restaurant = {
  id: number;
  name: string;
  location: string;
  imageUrl: string;
  rating: number;
};
const Restaurants = () => {
  const restaurants: Restaurant[] = [
    {
      id: 1,
      name: "My Bar Headquarters",
      location: "Connaught Place, Central Delhi",
      imageUrl: "/interior/interior_8.jpg", // Placeholder for actual image paths
      rating: 4.5,
    },
    {
      id: 2,
      name: "The G.T. Road",
      location: "Connaught Place, Central Delhi",
      imageUrl: "/interior/interior_5.jpg",
      rating: 4.3,
    },
    {
      id: 3,
      name: "Sandoz",
      location: "Connaught Place, Central Delhi",
      imageUrl: "/interior/interior_3.jpg",
      rating: 3.9,
    },
    {
      id: 4,
      name: "Barbeque Nation",
      location: "Connaught Place, Central Delhi",
      imageUrl: "/table/barbeque.jpg",
      rating: 4.3,
    },
    {
      id: 5,
      name: "AMA Cafe",
      location: "New Aruna Nagar, New Delhi",
      imageUrl: "/interior/interior_1.jpg",
      rating: 4.5,
    },
    {
      id: 6,
      name: "The Qube",
      location: "Chanakyapuri, New Delhi",
      imageUrl: "/interior/interior_bar.jpg",
      rating: 4.3,
    },
    {
      id: 7,
      name: "Tamra Restaurant",
      location: "Connaught Place, Central Delhi",
      imageUrl: "/interior/interior_4.jpg",
      rating: 3.9,
    },
    {
      id: 8,
      name: "Caffè Tonino",
      location: "Connaught Place, Central Delhi",
      imageUrl: "/interior/interior_6.jpg",
      rating: 4.3,
    },
    {
      id: 9,
      name: "Olive Bar & Kitchen",
      location: "Mehrauli, New Delhi",
      imageUrl: "/interior/interior_7.jpg",
      rating: 4.5,
    },
    {
      id: 10,
      name: "The Grammar Room",
      location: "Mehrauli, New Delhi",
      imageUrl: "/interior/interior_1.jpg",
      rating: 4.3,
    },
  ];
  const [date, setDate] = useState("2024-09-25");
  const [time, setTime] = useState("19:00");
  const [people, setPeople] = useState(2);
  const [location, setLocation] = useState("");
  return (
    <div>
      <div className="bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto rounded-lg bg-white shadow-md p-6">
          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
            Restaurants near Cox Arena
          </h2>

          {/* Form */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Date Input */}
            <div className="flex items-center bg-gray-50 border border-gray-300 rounded-md px-4 py-2 flex-grow">
              <FaCalendarAlt className="text-gray-500 mr-2" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent text-gray-700 focus:outline-none"
              />
            </div>

            {/* Time Input */}
            <div className="flex items-center bg-gray-50 border border-gray-300 rounded-md px-4 py-2 flex-grow">
              <FaClock className="text-gray-500 mr-2" />
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-transparent text-gray-700 focus:outline-none"
              >
                <option value="19:00">7:00 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="20:00">8:00 PM</option>
              </select>
            </div>

            {/* People Selector */}
            <div className="flex items-center bg-gray-50 border border-gray-300 rounded-md px-4 py-2 flex-grow">
              <FaUser className="text-gray-500 mr-2" />
              <select
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
                className="w-full bg-transparent text-gray-700 focus:outline-none"
              >
                <option value={1}>1 person</option>
                <option value={2}>2 people</option>
                <option value={3}>3 people</option>
                <option value={4}>4 people</option>
              </select>
            </div>

            {/* Location Input */}
            <div className="flex items-center bg-gray-50 border border-gray-300 rounded-md px-4 py-2 flex-grow">
              <input
                type="text"
                placeholder="Location or Restaurant"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-gray-700 focus:outline-none"
              />
            </div>

            {/* Search Button */}
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-md">
              Find a table
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen p-4">
        {/* Main Container */}
        <div className="max-w-7xl mx-auto flex gap-6">
          {/* Sidebar */}
          <aside className="w-1/4 bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Quick Filters</h3>
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 mb-4 border rounded-md focus:outline-none"
            />
            <div className="mb-6">
              <label className="block mb-2 text-sm font-semibold">
                Options
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Dineout Pay
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Pure Veg
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />5 Star
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Buffet
                </label>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-4">Cuisines</h3>
            <input
              type="text"
              placeholder="Search for Cuisine"
              className="w-full p-2 mb-4 border rounded-md focus:outline-none"
            />
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                North Indian
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Fast Food
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Chinese
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Thai
              </label>
            </div>

            <h3 className="text-lg font-semibold my-4">Tags</h3>
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 mb-4 border rounded-md focus:outline-none"
            />
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Casual Dining
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Cafe
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Breakfast
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Fine Dining
              </label>
            </div>
          </aside>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restaurants.map((restaurant, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
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
                    <p className="text-gray-600 text-sm">
                      {restaurant.location}
                    </p>
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
                <div className="grid grid-cols-3 gap-2 p-2">
                  {[
                    "5:30 PM",
                    "5:45 PM",
                    "6:00 PM",
                    "6:25 PM",
                    "6:30 PM",
                    "6:45 PM",
                  ].map((time) => (
                    <button
                      key={time}
                      className="text-sm border border-red-500 text-red-500 py-1 px-3 rounded hover:bg-red-500 hover:text-white"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
