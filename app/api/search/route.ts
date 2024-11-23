import { restaurants } from "@/constants/restaurants";
import { NextResponse } from "next/server";

/**
 * @description Handles `GET` requests to filter restaurants by a query.
 * @param req Request object
 * @returns Filtered restaurants
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json(
      { error: "Query parameter is required" },
      { status: 400 }
    );
  }

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(query.toLowerCase())
  );

  return NextResponse.json(filteredRestaurants, { status: 200 });
}
