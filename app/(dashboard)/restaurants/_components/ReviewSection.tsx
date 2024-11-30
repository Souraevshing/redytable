import { Star } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { RatingCircle } from "@/components/ui/rating-circle";
import { reviews } from "@/constants/customer-reviews";
import { CustomerReviewProps } from "@/types/global";

/**
 * @description display customer `reviews`
 */
export default function ReviewSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Ratings & Reviews</h2>

      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <RatingCircle
            rating={4.5}
            size="sm"
            className="fill-green-400 text-green-400"
          />
          <p className="text-sm text-muted-foreground">2432 reviews</p>
        </div>

        <div className="flex-1">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-6 h-6 cursor-pointer transition-colors hover:fill-green-400 hover:text-green-400"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review: CustomerReviewProps, index: number) => (
          <div key={index} className="flex items-start space-x-4">
            <Avatar>
              <AvatarFallback>{review.author[0]}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <h3 className="font-medium">{review.author}</h3>
                <div className="flex items-center gap-1">
                  <span className="text-green-400">{review.rating}</span>
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
