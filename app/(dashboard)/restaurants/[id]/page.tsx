import Image from "next/image";
import { interiorLogo1 } from "@/constants/images";
import MenuSection from "../_components/MenuSection";
import RestaurantDetails from "../_components/RestaurantDetails";
import RestaurantGallery from "../_components/RestaurantGallery";
import ReviewSection from "../_components/ReviewSection";
import SimilarRestaurants from "../_components/SimilarRestaurants";


export default function RestaurantPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <main className="p-4 space-y-8">
        <RestaurantGallery />

        <RestaurantDetails
          name="The Bar Restaurants"
          location="North Indian, South Indian, Mexican"
          address="Connaught Place, Delhi"
          rating={4.5}
          reviews={25}
        />

        <div className="relative h-48 rounded-lg overflow-hidden">
          <Image
            src={interiorLogo1}
            alt="Special menu offer"
            className="object-cover"
            fill
          />
        </div>

        <MenuSection />
        <ReviewSection />
        <SimilarRestaurants />
      </main>
    </div>
  );
}
