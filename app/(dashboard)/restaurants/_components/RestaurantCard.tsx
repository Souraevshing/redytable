import Image from "next/image";
import { FaStar } from "react-icons/fa6";

import { timeOptions } from "@/constants/restaurant-filters";
import { RestaurantListProps } from "@/types/global";

/**
 * @description show restaurant as card
 * @param restaurant RestaurantListProps
 * @returns
 */
const RestaurantCard = ({
  restaurant,
}: {
  restaurant: RestaurantListProps;
}) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <Image
      src={restaurant.imageUrl}
      alt={restaurant.name}
      width={400}
      height={200}
      className="object-cover w-full h-56"
    />
    <div className="p-4 flex">
      <div className="w-3/4">
        <h3 className="text-lg font-bold">{restaurant.name}</h3>
        <p className="text-gray-600 text-sm">{restaurant.location}</p>
      </div>
      <div className="w-1/4 text-center">
        <div className="bg-green-800 text-white rounded-md px-2 py-1">
          {restaurant.rating} <FaStar className="inline" />
        </div>
        <p className="text-sm mt-1">₹200 for two</p>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2 p-2">
      {timeOptions.time.map((time, index) => (
        <button
          key={index}
          className="text-sm border border-red-500 text-red-500 py-1 px-3 rounded hover:bg-red-500 hover:text-white"
        >
          {time}
        </button>
      ))}
    </div>
  </div>
);

export default RestaurantCard;
