"use client"
import { Star } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { RatingCircle } from "@/components/ui/rating-circle";
import { reviews } from "@/constants/customer-reviews";
import { CustomerReviewProps } from "@/types/global";
import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";


/**
 * @description display customer `reviews`
 */
export default function ReviewSection() {

  const [userRating, setUserRating] = useState(0);
  const reviewsRef = useRef<HTMLDivElement>(null);
  return (  
  <div>

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
    </div>
  );
}
