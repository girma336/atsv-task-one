interface Restaurant {
  food_name: string;
  food_rating: number;
  food_image: string;
  restaurant_name: string;
  restaurant_logo: string;
  restaurant_status: "Open Now" | "Closed";
  price: string;
}
interface RestaurantCardProps {
  restaurant: Restaurant;
}
const RestaurantCard = ({ restaurant }: RestaurantCardProps) => (
  <article className="p-0 flex flex-col gap-4">
    <div className="relative">
      <img
        src={restaurant.food_image}
        alt={restaurant.food_name}
        className="aspect-square object-cover rounded-lg"
      />
      <button className="absolute top-4 left-4 bg-[#F17228] px-4 py-2 rounded-lg text-white restaurant-price text-sm ">
        {restaurant.price}
      </button>
    </div>

    <div className="flex items-center gap-3">
      <img
        src={restaurant.restaurant_logo}
        alt={`${restaurant.restaurant_name} Logo`}
        className="w-16 h-16 object-cover rounded-xl"
      />
      <div className="block">
        <h2 className="restaurant-name text-lg font-semibold">
          {restaurant.restaurant_name}
        </h2>
        <span className="restaurant-rating text-yellow-500 font-medium">
          ⭐ {restaurant.food_rating}
        </span>
      </div>
    </div>

    <div className="flex justify-between items-center">
      <span
        className={`restaurant-status text-sm font-medium px-4 py-2 rounded-2xl ${
          restaurant.restaurant_status === "Open Now"
            ? "text-[#79B93C] bg-[#79B93C33]"
            : "text-[#F17228] bg-[#F1722833] "
        }`}
      >
        {restaurant.restaurant_status}
      </span>
    </div>
  </article>
);

export default RestaurantCard;
