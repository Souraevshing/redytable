import { Star } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { RatingCircle } from "@/components/ui/rating-circle";
import { reviews } from "@/constants/customer-reviews";

/**
 * @description display customer `reviews`
 */
export default function ReviewSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Ratings & Reviews</h2>

      <div>
        <div>
          {/* //TODO add rating circle */}
          <RatingCircle
            rating={4.5}
            size="md"
            className="flex left-0 fill-green-400"
          />
        </div>

        <div className="flex">
          <Star className="w-4 h-4 text-gray-400 " />
          <Star className="w-4 h-4 text-gray-400 " />
          <Star className="w-4 h-4 text-gray-400 " />
          <Star className="w-4 h-4 text-gray-400 " />
          <Star className="w-4 h-4 text-gray-400" />
        </div>
        <p className="flex justify-between font-medium">Rate this place</p>
      </div>

      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="flex items-start space-x-4">
            <Avatar>
              <AvatarFallback>{review.author[0]}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <h3 className="font-medium">{review.author}</h3>
                <div className="flex items-center justify-center">
                  <span className="fill-green-400 text-green-400">
                    {review.rating}{" "}
                  </span>
                  <Star className="w-4 h-4 fill-green-400 text-green-400" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{review.content}</p>
              <p className="text-xs text-muted-foreground">{review.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
