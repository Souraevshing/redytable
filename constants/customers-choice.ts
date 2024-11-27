import {
  dashboardLogo1,
  dashboardLogo2,
  dashboardLogo3,
  dashboardLogo4,
  interiorBarLogo,
  interiorLogo4,
  tableLogo1,
  tableLogo4,
} from "@/constants/images";
import { CustomersChoiceProps } from "@/types/global";

export const customerChoices: CustomersChoiceProps[] = [
  {
    name: "Party Vibes",
    imageUrl: dashboardLogo1,
  },
  {
    name: "Drink and Dine",
    imageUrl: interiorBarLogo,
  },
  {
    name: "Breakfast",
    imageUrl: dashboardLogo3,
  },
  {
    name: "Cafes",
    imageUrl: interiorLogo4,
  },
  {
    name: "Premium Dining",
    imageUrl: tableLogo1,
  },
  {
    name: "Event Experiences",
    imageUrl: dashboardLogo2,
  },
  {
    name: "Romantic Dining",
    imageUrl: tableLogo4,
  },
  {
    name: "Family Dining",
    imageUrl: dashboardLogo4,
  },
];
