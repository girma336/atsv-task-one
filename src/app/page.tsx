import { Hero } from "@/components/sections/Hero";
import RestaurantList from "@/components/sections/resturants/RestaurantList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full ">
      <Hero />
      <RestaurantList />
    </div>
  );
}
