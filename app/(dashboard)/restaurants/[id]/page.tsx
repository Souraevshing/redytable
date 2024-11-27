"use client";

import { useState } from "react";
import { FaCalendarAlt, FaClock, FaUser } from "react-icons/fa";

import { restaurants } from "@/constants/restaurants";
import { Sidebar } from "lucide-react";
import InputWrapper from "../_components/InputWrapper";
import RestaurantCard from "../_components/RestaurantCard";

/**
 * @description component to render details for each restaurant
 * @returns each restaurant's name, address, and rating
 */
const RestaurantDetails = () => {
  const [date, setDate] = useState<string>("2024-09-25");
  const [time, setTime] = useState<string>("19:00");
  const [people, setPeople] = useState<number>(2);
  const [location, setLocation] = useState<string>("");

  return (
    <div>
      <div className="bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto rounded-lg bg-white shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
            Restaurants near Cox Arena
          </h2>

          <div className="flex flex-wrap items-center gap-4">
            {/* Date Input */}
            <InputWrapper
              icon={<FaCalendarAlt />}
              type="date"
              value={date}
              setValue={setDate}
            />

            {/* Time Selector */}
            <InputWrapper icon={<FaClock />}>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-transparent text-gray-700 focus:outline-none"
              >
                <option value="19:00">7:00 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="20:00">8:00 PM</option>
              </select>
            </InputWrapper>

            {/* People Selector */}
            <InputWrapper icon={<FaUser />}>
              <select
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
                className="w-full bg-transparent text-gray-700 focus:outline-none"
              >
                {[1, 2, 3, 4].map((person) => (
                  <option key={person} value={person}>
                    {person} person{person > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </InputWrapper>

            {/* Location Input */}
            <InputWrapper>
              <input
                type="text"
                placeholder="Location or Restaurant"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-gray-700 focus:outline-none"
              />
            </InputWrapper>

            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-md">
              Find a table
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen p-4">
        <div className="max-w-7xl mx-auto flex gap-6">
          {/* Sidebar */}
          <Sidebar />

          {/* restaurant card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restaurants.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
