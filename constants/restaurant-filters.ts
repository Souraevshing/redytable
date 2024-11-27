import {
  RestaurantBookingTimeProps,
  RestaurantCuisineProps,
  RestaurantPeopleProps,
  RestaurantQuickFilterProps,
  RestaurantTagProps,
} from "@/types/global";

export const timeOptions: RestaurantBookingTimeProps = {
  time: ["19:00", "18:00", "20:00"],
};

export const peopleOptions: RestaurantPeopleProps = {
  peoples: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

export const quickFilters: RestaurantQuickFilterProps = {
  filters: ["Dineout Pay", "Pure Veg", "5 Star", "Buffet"],
};

export const cuisines: RestaurantCuisineProps = {
  cuisines: ["North Indian", "Fast Food", "Chinese", "Thai"],
};

export const tags: RestaurantTagProps = {
  tags: ["Casual Dining", "Cafe", "Breakfast", "Fine Dining"],
};
