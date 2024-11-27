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
    name: "My Bar Headquarters",
    location: "Connaught Place, Central Delhi",
    imageUrl: interiorLogo8,
    rating: 4.5,
  },
  {
    name: "The G.T. Road",
    location: "Connaught Place, Central Delhi",
    imageUrl: interiorLogo5,
    rating: 4.3,
  },
  {
    name: "Sandoz",
    location: "Connaught Place, Central Delhi",
    imageUrl: interiorLogo3,
    rating: 3.9,
  },
  {
    name: "Barbeque Nation",
    location: "Connaught Place, Central Delhi",
    imageUrl: barbequeLogo,
    rating: 4.3,
  },
  {
    name: "AMA Cafe",
    location: "New Aruna Nagar, New Delhi",
    imageUrl: interiorLogo1,
    rating: 4.5,
  },
  {
    name: "The Qube",
    location: "Chanakyapuri, New Delhi",
    imageUrl: interiorBarLogo,
    rating: 4.3,
  },
  {
    name: "Tamra Restaurant",
    location: "Connaught Place, Central Delhi",
    imageUrl: interiorLogo4,
    rating: 3.9,
  },
  {
    name: "Caffè Tonino",
    location: "Connaught Place, Central Delhi",
    imageUrl: interiorLogo6,
    rating: 4.3,
  },
  {
    name: "Olive Bar & Kitchen",
    location: "Mehrauli, New Delhi",
    imageUrl: interiorLogo7,
    rating: 4.5,
  },
  {
    name: "The Grammar Room",
    location: "Mehrauli, New Delhi",
    imageUrl: interiorLogo1,
    rating: 4.3,
  },
];
