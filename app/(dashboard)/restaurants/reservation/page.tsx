"use client";

import { Calendar } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReservationProps } from "@/types/global";

/**
 * @description choose from the list of options available for rooms
 */
export default function ReservationPage() {
  const [menuItems, setMenuItems] = React.useState<ReservationProps[]>(
    Array(8)
      .fill(null)
      .map((_, i) => ({
        id: i + 1,
        name: "Double Chicken Roll",
        price: 168.57,
        quantity: 0,
      }))
  );

  const categories = [
    { name: "New Chicken Rolls", count: 15 },
    { name: "All Day Lunch Special Meal Box", count: 4 },
    { name: "Burgers", count: 20 },
    { name: "Peri Peri Chicken Strips & Leg Pc", count: 7 },
    { name: "Buckets/ Meals for 1-2", count: 8 },
    { name: "Buckets/ Meals for 3-4", count: 2 },
    { name: "Rice Bowlz", count: 4 },
    { name: "Value Snackers", count: 5 },
    { name: "Hot & Crispy Chicken, Wings", count: 7 },
    { name: "Boneless Chicken Popcorn", count: 2 },
    { name: "Sides and Dips", count: 9 },
    { name: "Desserts & Beverages", count: 18 },
  ];

  const updateQuantity = (id: number, increment: boolean) => {
    setMenuItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: increment
                ? item.quantity + 1
                : Math.max(0, item.quantity - 1),
            }
          : item
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Make Reservation</h1>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Guest" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num} {num === 1 ? "Guest" : "Guests"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <SelectValue placeholder="Select Date" />
            </div>
          </SelectTrigger>
          <SelectContent>
            {[...Array(7)].map((_, i) => {
              const date = new Date();
              date.setDate(date.getDate() + i);
              return (
                <SelectItem key={i} value={date.toISOString()}>
                  {date.toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="time" className="w-full max-w-md mx-auto mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="time">Select time</TabsTrigger>
          <TabsTrigger value="menu">Menu</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid md:grid-cols-[300px,1fr] gap-6">
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="space-y-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "secondary" : "ghost"}
                  className="w-full justify-start text-left font-normal"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </nav>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          {menuItems.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle className="text-lg">{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <span className="text-lg">₹{item.price.toFixed(2)}</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, false)}
                    aria-label="Decrease quantity"
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, true)}
                    aria-label="Increase quantity"
                  >
                    +
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
