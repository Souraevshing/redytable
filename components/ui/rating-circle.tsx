import { cn } from "@/lib/utils"

interface RatingCircleProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  reviewCount?: number;
}

export function RatingCircle({
  rating,
  maxRating = 5,
  size = 'md',
  className,
  reviewCount
}: RatingCircleProps) {
  // Ensure rating is between 0 and maxRating
  const normalizedRating = Math.min(Math.max(0, rating), maxRating);
  const percentage = (normalizedRating / maxRating) * 100;

  // Circle size variants
  const circleSizes = {
    sm: 'w-16 h-16 text-lg [--stroke-width:4]',
    md: 'w-24 h-24 text-2xl [--stroke-width:6]',
    lg: 'w-32 h-32 text-3xl [--stroke-width:8]'
  };

  return (
    <div className="flex flex-col items-center">
      <div className={cn(
        "relative",
        circleSizes[size],
        className
      )}>
        <svg 
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{
            transform: 'rotate(-90deg)',
            WebkitTransform: 'rotate(-90deg)'
          }}
        >
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            strokeWidth="var(--stroke-width)"
            className="text-muted/25 stroke-current"
          />
          
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            strokeWidth="var(--stroke-width)"
            className="text-primary stroke-current text-green-600"
            pathLength="100"
            strokeDasharray="100"
            strokeDashoffset={100 - percentage}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 0.5s ease'
            }}
          />
        </svg>

        {/* Rating text */}
        <div className="absolute inset-0 flex items-center justify-center font-bold">
          {rating.toFixed(1)}
        </div>
      </div>
      {reviewCount !== undefined && (
        <div className="text-sm text-muted-foreground mt-2">
          Based on {reviewCount} reviews
        </div>
      )}
    </div>
  );
}