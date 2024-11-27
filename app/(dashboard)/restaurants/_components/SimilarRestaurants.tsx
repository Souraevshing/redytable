import { Star } from "lucide-react";
import Image from "next/image";

import { restaurants } from "@/constants/restaurants";

/**
 * @description show restaurants of similar type by name, location or region
 */
export default function SimilarRestaurants() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">You May Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src={restaurant.imageUrl}
                alt={restaurant.name}
                className="object-cover"
                fill
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium">{restaurant.name}</h3>
              <p className="text-sm text-muted-foreground">
                {restaurant.location}
              </p>
              <div className="flex items-center space-x-1 mt-2">
                <span className="font-medium">{restaurant.rating}</span>
                <Star className="w-4 h-4 fill-green-700 text-green-700" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
