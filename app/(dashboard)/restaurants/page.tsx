"use client";

import Image from "next/image";
import { useState } from "react";
import { FaCalendarAlt, FaClock, FaStar, FaUser } from "react-icons/fa";

import {
  cuisines,
  peopleOptions,
  quickFilters,
  tags,
  timeOptions,
} from "@/constants/restaurant-filters";
import { restaurants } from "@/constants/restaurants";

/**
 * @description render `restaurant` details implementing `filters`
 */
const Restaurants = () => {
  const [filters, setFilters] = useState<RestaurantFilterProps>({
    date: "2024-09-25",
    time: "19:00",
    people: 2,
    location: "",
  });

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const { date, time, people, location } = filters;

  return (
    <div>
      <div className="bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto rounded-lg bg-white shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
            Restaurants near Cox Arena
          </h2>

          <div className="flex flex-wrap items-center gap-4">
            <InputWithIcon
              label="Date"
              icon={<FaCalendarAlt className="text-gray-500" />}
              type="date"
              value={date}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFilterChange("date", e.target.value)
              }
            />

            <InputWithIcon
              label="Time"
              icon={<FaClock className="text-gray-500" />}
              type="select"
              value={time}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFilterChange("time", e.target.value)
              }
              options={timeOptions.time}
            />

            <InputWithIcon
              label="People"
              icon={<FaUser className="text-gray-500" />}
              type="select"
              value={people}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFilterChange("people", e.target.value)
              }
              options={peopleOptions.peoples}
            />

            <div className="flex items-center bg-gray-50 border border-gray-300 rounded-md px-4 py-2 flex-grow">
              <input
                type="text"
                placeholder="Location or Restaurant"
                value={location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
                className="w-full bg-transparent text-gray-700 focus:outline-none"
              />
            </div>

            <button
              type="button"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-md"
            >
              Find a table
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="bg-gray-50 min-h-screen p-4">
        <div className="max-w-7xl mx-auto flex gap-6">
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
                {quickFilters.filters.map((option, index) => {
                  return (
                    <label key={index} className="flex items-center gap-2">
                      <input type="checkbox" /> {option}
                    </label>
                  );
                })}
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-4">Cuisines</h3>
            <input
              type="text"
              placeholder="Search for Cuisine"
              className="w-full p-2 mb-4 border rounded-md focus:outline-none"
            />
            <div className="space-y-2">
              {cuisines.cuisines.map((cuisine, index) => {
                return (
                  <label key={index} className="flex items-center gap-2">
                    <input type="checkbox" /> {cuisine}
                  </label>
                );
              })}
            </div>

            <h3 className="text-lg font-semibold my-4">Tags</h3>
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 mb-4 border rounded-md focus:outline-none"
            />
            <div className="space-y-2">
              {tags.tags.map((tag, index) => {
                return (
                  <label key={index} className="flex items-center gap-2">
                    <input type="checkbox" /> {tag}
                  </label>
                );
              })}
            </div>
          </aside>

          {/* Restaurant Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restaurants.map(({ name, imageUrl, location, rating }, index) => (
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
                <div className="p-4 flex">
                  <div className="w-3/4">
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="text-gray-600 text-sm">{location}</p>
                  </div>
                  <div className="w-1/4 text-center">
                    <div className="rounded-md bg-green-800 text-white px-[11px]">
                      <span className="text-xl font-semibold">
                        {rating}{" "}
                        <FaStar className="inline w-5 h-5 -mt-2 mx-1" />
                      </span>
                    </div>
                    <h2 className="text-[13px] font-semibold mt-1">
                      ₹200 for two
                    </h2>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 p-2">
                  {timeOptions.time.map((time, index) => {
                    return (
                      <button
                        key={index}
                        className="text-sm border border-red-500 text-red-500 py-1 px-3 rounded hover:bg-red-500 hover:text-white"
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const InputWithIcon = ({
  icon,
  type,
  value,
  onChange,
  options,
}: InputWithIconProps) => {
  return (
    <div className="flex items-center bg-gray-50 border border-gray-300 rounded-md px-4 py-2 flex-grow">
      {icon && <span className="mr-2">{icon}</span>}
      {type === "select" ? (
        <select
          value={value}
          onChange={onChange}
          className="w-full bg-transparent text-gray-700 focus:outline-none"
        >
          {options?.map((option: string | number) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent text-gray-700 focus:outline-none"
        />
      )}
    </div>
  );
};

export default Restaurants;
