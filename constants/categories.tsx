import { CategoryProps } from "@/types/global";
import { Wallet, Leaf, UtensilsCrossed, Building, Store } from "lucide-react";

export const categories: CategoryProps[] = [
  { 
    name: "Pocket Friendly", 
    href: "#", 
    icon: <Wallet className="w-5 h-5" />
  },
  { 
    name: "Pure Veg", 
    href: "#", 
    icon: <Leaf className="w-5 h-5" />
  },
  { 
    name: "Buffet", 
    href: "#", 
    icon: <UtensilsCrossed className="w-5 h-5" />
  },
  { 
    name: "Must Visit", 
    href: "#", 
    icon: <Building className="w-5 h-5" />
  },
  { 
    name: "New Restaurants", 
    href: "#", 
    icon: <Store className="w-5 h-5" />
  },
];