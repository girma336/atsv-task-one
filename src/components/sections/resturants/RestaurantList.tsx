import React from "react";
import RestaurantCard from "./ResturantCard";
interface Restaurant {
  food_name: string;
  food_rating: number;
  food_image: string;
  restaurant_name: string;
  restaurant_logo: string;
  restaurant_status: "Open Now" | "Closed";
  price: string;
}
const mockData: Restaurant[] = [
  {
    food_name: "Margherita Pizza",
    food_rating: 4.5,
    food_image: "/images/herofood.png",
    restaurant_name: "Pizzeria Bella",
    restaurant_logo: "/images/herofood.png",
    restaurant_status: "Open Now",
    price: "$12.99",
  },
  {
    food_name: "Cheeseburger",
    food_rating: 4.2,
    food_image: "/images/food1.png",
    restaurant_name: "Burger Haven",
    restaurant_logo: "/images/herofood.png",
    restaurant_status: "Closed",
    price: "$10.50",
  },
  {
    food_name: "Sushi Platter",
    food_rating: 4.8,
    food_image: "/images/herofood.png",
    restaurant_name: "Sakura Sushi",
    restaurant_logo: "/images/herofood.png",
    restaurant_status: "Open Now",
    price: "$24.99",
  },
  {
    food_name: "Tacos",
    food_rating: 4.3,
    food_image: "/images/food1.png",
    restaurant_name: "Taco Fiesta",
    restaurant_logo: "/images/food1.png",
    restaurant_status: "Open Now",
    price: "$8.99",
  },
  {
    food_name: "Margherita Pizza",
    food_rating: 4.5,
    food_image: "/images/herofood.png",
    restaurant_name: "Pizzeria Bella",
    restaurant_logo: "/images/herofood.png",
    restaurant_status: "Open Now",
    price: "$12.99",
  },
  {
    food_name: "Cheeseburger",
    food_rating: 4.2,
    food_image: "/images/food1.png",
    restaurant_name: "Burger Haven",
    restaurant_logo: "/images/herofood.png",
    restaurant_status: "Closed",
    price: "$10.50",
  },
  {
    food_name: "Sushi Platter",
    food_rating: 4.8,
    food_image: "/images/herofood.png",
    restaurant_name: "Sakura Sushi",
    restaurant_logo: "/images/herofood.png",
    restaurant_status: "Open Now",
    price: "$24.99",
  },
  {
    food_name: "Tacos",
    food_rating: 4.3,
    food_image: "/images/food1.png",
    restaurant_name: "Taco Fiesta",
    restaurant_logo: "/images/food1.png",
    restaurant_status: "Open Now",
    price: "$8.99",
  },
];

const RestaurantList = () => {
  return (
    <section className="container py-8 max-w-7xl mx-auto px-4 lg:px-2">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Featured Restaurants
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockData.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
};

export default RestaurantList;
