import {
  barbequeLogo,
  interiorBarLogo,
  interiorLogo1,
  interiorLogo3,
  interiorLogo4,
  interiorLogo5,
  interiorLogo6,
  interiorLogo7,
  interiorLogo8,
} from "@/constants/images";
import { RestaurantListProps } from "@/types/global";

export const restaurants: RestaurantListProps[] = [
  {
    name: "Inja",
    location: "New Friends Colony, South Delhi",
    imageUrl: interiorLogo6, // Replace with actual image path
    rating: 4.6,
    distance: "2.5 km",
  },
  {
    name: "Indian Accent",
    location: "The Lodhi Hotel, South Delhi",
    imageUrl: barbequeLogo, // Replace with actual image path
    rating: 4.8,
    distance: "3.2 km",
  },
  {
    name: "Diggin",
    location: "Anand Lok, South Delhi",
    imageUrl: interiorBarLogo, // Replace with actual image path
    rating: 4.4,
    distance: "1.8 km",
  },
  {
    name: "Guppy",
    location: "Lodhi Colony, South Delhi",
    imageUrl: interiorLogo1, // Replace with actual image path
    rating: 4.7,
    distance: "3.5 km",
  },
  {
    name: "Olive Bar & Kitchen",
    location: "Mehrauli, South Delhi",
    imageUrl: interiorLogo7, // Replace with actual image path
    rating: 4.6,
    distance: "4.0 km",
  },
  {
    name: "Perch Wine & Coffee Bar",
    location: "Khan Market, South Delhi",
    imageUrl: interiorLogo3, // Replace with actual image path
    rating: 4.5,
    distance: "2.0 km",
  },
  {
    name: "Lodhi - The Garden Restaurant",
    location: "Lodhi Road, South Delhi",
    imageUrl: interiorLogo4, // Replace with actual image path
    rating: 4.7,
    distance: "3.0 km",
  },
  {
    name: "Cafe Lota",
    location: "National Crafts Museum, South Delhi",
    imageUrl: interiorLogo5, // Replace with actual image path
    rating: 4.3,
    distance: "3.8 km",
  },
  {
    name: "Big Chill",
    location: "Kailash Colony, South Delhi",
    imageUrl: interiorLogo6, // Replace with actual image path
    rating: 4.6,
    distance: "2.5 km",
  },
  {
    name: "Bukhara",
    location: "ITC Maurya, South Delhi",
    imageUrl: interiorLogo4, // Replace with actual image path
    rating: 4.9,
    distance: "5.0 km",
  },
  {
    name: "Cafe Dori",
    location: "Chattarpur, South Delhi",
    imageUrl: interiorLogo8, // Replace with actual image path
    rating: 4.4,
    distance: "4.5 km",
  },
  {
    name: "Cafe Lota",
    location: "National Crafts Museum, South Delhi",
    imageUrl: interiorLogo5, // Replace with actual image path
    rating: 4.3,
    distance: "3.8 km",
  },
];
