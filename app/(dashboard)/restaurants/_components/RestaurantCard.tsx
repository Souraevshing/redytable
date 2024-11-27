import Image from "next/image";
import { FaStar } from "react-icons/fa6";

import { timeOptions } from "@/constants/restaurant-filters";
import { RestaurantListProps } from "@/types/global";

/**
 * @description show restaurant as card
 * @param restaurant RestaurantListProps
 */
const RestaurantCard = ({
  restaurant,
}: {
  restaurant: RestaurantListProps;
}) => {
  return (
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
          <p className="text-gray-600 text-sm">{restaurant.distance}</p>
        </div>
        <div className="w-1/4 flex flex-col items-end">
          <div className="rounded-md bg-green-800 text-white px-2 py-1 inline-flex items-center">
            <span className="text-lg font-semibold mr-1">
              {restaurant.rating}
            </span>
            <FaStar className="w-4 h-4" />
          </div>
          <p className="text-sm font-semibold mt-1 whitespace-nowrap">
            ₹200 for two
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 p-2">
        {timeOptions.time.map((time, index) => (
          <button
            key={index}
            className="text-sm border border-red-500 text-red-500 py-1 px-2 rounded hover:bg-red-500 hover:text-white transition-colors"
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCard;
