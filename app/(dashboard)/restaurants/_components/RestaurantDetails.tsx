import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { RestaurantDetailsProps } from "@/types/global";

/**
 * @description display all information for restaurant
 * @param name string,
 * @param location string,
 * @param address string,
 * @param rating number,
 * @param reviews number,
 * @returns
 */
export default function RestaurantDetails({
  name,
  location,
  address,
  rating,
  reviews,
}: RestaurantDetailsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-muted-foreground">{location}</p>
          <p className="text-sm">{address}</p>
        </div>
        <div className="flex items-center space-x-1 bg-green-100 px-2 py-1 rounded">
          <span className="font-medium text-green-700">{rating}</span>
          <Star className="w-4 h-4 fill-green-700 text-green-700" />
          <span className="text-sm text-green-700">({reviews} reviews)</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button>Book a Table</Button>
        <div className="text-sm">
          <p className="font-medium">Open</p>
          <p className="text-muted-foreground">12:00pm-11:pm</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
        <div>
          <h3 className="font-medium">Cuisine</h3>
          <p className="text-sm text-muted-foreground">North India</p>
        </div>
        <div>
          <h3 className="font-medium">Average Cost</h3>
          <p className="text-sm text-muted-foreground">₹200 for two</p>
        </div>
        <div>
          <h3 className="font-medium">Type</h3>
          <p className="text-sm text-muted-foreground">Dining</p>
        </div>
        <div>
          <h3 className="font-medium">Facilities</h3>
          <p className="text-sm text-muted-foreground">AC, Wifi, Parking</p>
        </div>
      </div>
    </div>
  );
}
