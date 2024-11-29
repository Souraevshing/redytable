import { restaurants } from "@/constants/restaurants";
import { ApiError } from "@/lib/api-utils";
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
    throw new ApiError(400, "Query parameter is required");
  }

  try {
    const filteredRestaurants = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(query.toLowerCase())
    );

    return NextResponse.json(filteredRestaurants, { status: 200 });
  } catch (error) {
    console.error(error);

    if (error instanceof ApiError) {
      throw error;
    }

    throw new ApiError(500, "Internal server error");
  }
}
