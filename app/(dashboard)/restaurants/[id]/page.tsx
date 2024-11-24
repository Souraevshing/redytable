"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Car, ChevronDown, Clock, Heart, MapPin, Send, Star, Wifi, Wind } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RatingCircle } from "@/components/ui/rating-circle";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export default function Component() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const [userRating, setUserRating] = useState(0);
  const timings = {
    Monday: "12:00 PM - 11:00 PM",
    Tuesday: "12:00 PM - 11:00 PM",
    Wednesday: "12:00 PM - 11:00 PM",
    Thursday: "12:00 PM - 11:00 PM",
    Friday: "12:00 PM - 1:00 AM",
    Saturday: "12:00 PM - 1:00 AM",
    Sunday: "12:00 PM - 11:00 PM",
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="min-h-screen flex flex-col items-center w-full">
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 relative">
              <Image
                src="/3.jpg"
                alt="Restaurant Interior"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full h-[400px]"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4"
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <Heart
                  className={`w-4 h-4 ${
                    isWishlisted ? "fill-red-500 text-red-500" : ""
                  }`}
                />
              </Button>
            </div>
            <div className="grid gap-4">
              <Image
                src="/4.jpg"
                alt="Restaurant Interior"
                width={400}
                height={190}
                className="rounded-lg object-cover w-full h-[190px]"
              />
              <Dialog>
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                </DialogHeader>
                <DialogTrigger asChild>
                  <div className="relative cursor-pointer">
                    <Image
                      src="/5.jpg"
                      alt="Restaurant Interior"
                      width={400}
                      height={190}
                      className="rounded-lg object-cover w-full h-[190px] blur-[1px]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                      View More
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-6xl h-[50vh]">
                  <div className="flex overflow-x-auto space-x-4 p-4">
                    {["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"].map(
                      (imgSrc, index) => (
                        <Image
                          key={index}
                          src={imgSrc}
                          alt={`Restaurant Image ${index + 1}`}
                          width={300}
                          height={200}
                          className="rounded-lg object-cover w-[300px] h-[300px]"
                        />
                      )
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        {/* Restaurant Info */}
        <section className="container py-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">The Bar Restaurants</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <span>North Indian • South Indian • Mexican</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <MapPin className="w-4 h-4" />
                <span>Connaught Place, Delhi | </span>
                <Button variant="link" className="text-red-600 p-0">
                  <Send>
                      
                  </Send>
                  Direction  
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                4.5 ★
              </div>
              <span className="text-sm text-muted-foreground">250 ratings</span>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Clock className="w-4 h-4" />
                    Open: 12:00pm-11:pm
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-2">
                    {Object.entries(timings).map(([day, time]) => (
                      <div
                        key={day}
                        className="flex justify-between text-sm py-1"
                      >
                        <span>{day}</span>
                        <span>{time}</span>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <Button className="bg-red-600 text-white hover:bg-red-700">
              Book a Table
              </Button>
          </div>

          <div className="mt-6">
            <Image
              src="/banner.jpg"
              alt="Restaurant Promotion"
              width={1200}
              height={300}
              className="rounded-lg object-cover w-full h-[300px]"
            />
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="container py-6">
          <div className="flex space-x-4">
            <Button variant="ghost" onClick={() => scrollToSection(aboutRef)}>
              About
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection(reviewsRef)}>
              Reviews
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="container py-6">
          <h2 className="text-xl font-bold mb-4">About</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">About</h3>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Cuisine</h3>
                <p className="text-sm text-muted-foreground">
                  North Indian • South Indian • Mexican
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Average Cost</h3>
                <p className="text-sm text-muted-foreground">₹500 for two</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Facilities and Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Wind className="w-4 h-4" />
                    Air Conditioning
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Wifi className="w-4 h-4" />
                    Wifi
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Car className="w-4 h-4" />
                    Parking
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Menu Preview */}
        <section className="container py-6">
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <div className="flex gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <div className="w-32 h-32 relative cursor-pointer">
                  <Image
                    src="/menu.jpg"
                    alt="Menu Preview 1"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg border"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold rounded-lg">
                    View Menu
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl h-[50vh]">
                <div className="flex overflow-x-auto space-x-4 p-4">
                  {["/menu.jpg", "/menu.jpg", "/menu.jpg", "/menu.jpg"].map(
                    (imgSrc, index) => (
                      <Image
                        key={index}
                        src={imgSrc}
                        alt={`Menu Page ${index + 1}`}
                        width={300}
                        height={400}
                        className="rounded-lg border"
                      />
                    )
                  )}
                </div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <div className="w-32 h-32 relative cursor-pointer">
                  <Image
                    src="/menu.jpg"
                    alt="Menu Preview 1"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg border"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold rounded-lg">
                    View Menu
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl h-[50vh]">
                <div className="flex overflow-x-auto space-x-4 p-4">
                  {["/menu.jpg", "/menu.jpg", "/menu.jpg", "/menu.jpg"].map(
                    (imgSrc, index) => (
                      <Image
                        key={index}
                        src={imgSrc}
                        alt={`Menu Page ${index + 1}`}
                        width={300}
                        height={400}
                        className="rounded-lg border"
                      />
                    )
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Reviews */}
        <section ref={reviewsRef} id="reviews" className="container py-6">
          <h2 className="text-xl font-bold mb-4">Ratings & Reviews</h2>
          <div className="flex items-center gap-8 mb-6">
            <div className="flex-shrink-0">
              <RatingCircle
                rating={4.5}
                size="md"
                reviewCount={250}
                className="text-primary"
              />
            </div>
            <div>
              <div className="text-lg font-semibold mb-2">Rate this place</div>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Button
                        key={star}
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 hover:bg-transparent"
                        onClick={() => setUserRating(star)}
                      >
                        <Star 
                          className={cn(
                            "h-6 w-6",
                            userRating && star <= userRating 
                              ? "fill-yellow-400 text-primary text-yellow-400"
                              : "fill-none text-muted-foreground"
                          )}
                        />
                      </Button>
                    ))}
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Rate this Restaurant</DialogTitle>
                    <DialogDescription>
                      How would you rate your experience?
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Button
                          key={star}
                          variant="ghost"
                          size="icon"
                          className="h-12 w-12 hover:bg-transparent"
                          onClick={() => setUserRating(star)}
                        >
                          <Star 
                            className={cn(
                              "h-8 w-8",
                              userRating && star <= userRating 
                                ? "fill-yellow-400 text-primary text-yellow-400"
                                : "fill-none text-muted-foreground"
                            )}
                          />
                        </Button>
                      ))}
                    </div>
                    <textarea 
                      className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Share your experience (optional)"
                    />
                    <DialogFooter>
                      <Button 
                        variant="outline" 
                        onClick={() => setUserRating(0)}
                      >
                        Cancel
                      </Button>
                      <Button className="bg-red-600 text-white hover:bg-red-700">Submit Rating</Button>
                    </DialogFooter>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map((review) => (
              <Card key={review}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-muted" />
                    <div>
                      <div className="font-semibold">Test person</div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <Star className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Test text
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Similar Restaurants */}
        <section className="container py-6">
          <h2 className="text-xl font-bold mb-4">You May also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((restaurant) => (
              <Card key={restaurant}>
                <CardContent className="p-0">
                  <Image
                    src="/1.jpg"
                    alt="Restaurant"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4 flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">The Bar Restaurants</h3>
                      <p className="text-sm text-muted-foreground">
                        Connaught Place, Delhi
                      </p>
                      <span className="text-sm text-muted-foreground">
                        4.3 km
                      </span>
                    </div>
                    <div className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                      4.5 ★
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
