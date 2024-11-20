declare interface RestaurantListProps {
  name: string;
  location: string;
  imageUrl: string;
  rating: number;
}

declare interface CustomersChoiceProps {
  name: string;
  imageUrl: string;
}

declare interface InputWithIconProps {
  label?: string;
  icon: React.ReactNode;
  type: "text" | "date" | "select";
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options?: (string | number)[];
}

declare interface RestaurantFilterProps {
  date: string;
  time: string;
  people: number;
  location: string;
}

declare interface RestaurantBookingTimeProps {
  time: string[];
}

declare interface RestaurantPeopleProps {
  peoples: number[];
}

declare interface RestaurantQuickFilterProps {
  filters: string[];
}

declare interface RestaurantCuisineProps {
  cuisines: string[];
}

declare interface RestaurantTagProps {
  tags: string[];
}
