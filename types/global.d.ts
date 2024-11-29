import { StaticImageData } from "next/image";

declare interface RestaurantListProps {
  name: string;
  location: string;
  imageUrl: string | StaticImageData;
  rating: number;
  distance: string;
}

declare interface CustomersChoiceProps {
  name: string;
  imageUrl: string | StaticImageData;
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

declare interface NavbarLinkProps {
  href: string;
  label: string;
}

declare interface RatingCircleProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  reviewCount?: number;
  fillColor?: string;
}

declare interface ReservationProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

declare interface CustomerReviewProps {
  author: string;
  date: string;
  rating: number;
  content: string;
}

declare interface RestaurantDetailsProps {
  name: string;
  location: string;
  address: string;
  rating: number;
  reviews: number;
}
