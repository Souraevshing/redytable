"use client";

import { Calendar } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MenuTab } from "@/components/ui/menu-tab";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ReservationPage() {
  const [selectedTime, setSelectedTime] = useState<string>();
  const timeSlots = [
    "8:15 PM",
    "9:15 PM",
    "10:15 PM",
    "11:15 PM",
    "12:15 PM",
    "01:15 PM",
  ];

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold text-center">Make Reservation</h1>

      <div className="grid md:grid-cols-2 gap-4">
        <Select>
          <SelectTrigger className="w-full bg-gray-100">
            <SelectValue placeholder="Select Guest" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Guest</SelectItem>
            <SelectItem value="2">2 Guests</SelectItem>
            <SelectItem value="3">3 Guests</SelectItem>
            <SelectItem value="4">4 Guests</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full bg-gray-100">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <SelectValue placeholder="Select Date" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="tomorrow">Tomorrow</SelectItem>
            <SelectItem value="next-week">Next Week</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="time" className="w-full max-w-md mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="time" className="data-[state=active]:bg-pink-200">
            Select time
          </TabsTrigger>
          <TabsTrigger value="menu" className="data-[state=active]:bg-pink-200">
            Menu
          </TabsTrigger>
        </TabsList>
        <TabsContent value="time">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mt-4">
            {timeSlots.map((time, index) => (
              <Button
                key={index}
                variant={selectedTime === time ? "outline" : "secondary"}
                className={`${
                  selectedTime === time ? "bg-gray-200" : "bg-white"
                }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </Button>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="menu">
          <MenuTab />
        </TabsContent>
      </Tabs>

      <div className="text-center">
        <Button variant="link" className="text-gray-600 font-semibold">
          View All offers ▼
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {[1, 2].map((index) => (
          <Card key={index} className="p-4 relative">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">Flat 30% off</h3>
                <p className="text-gray-500">25 cover charge required</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-gray-200" />
            </div>
          </Card>
        ))}
      </div>

      <Button className="w-full bg-red-500 hover:bg-red-600 text-white py-6 text-lg">
        Pay Now
      </Button>
    </div>
  );
}
