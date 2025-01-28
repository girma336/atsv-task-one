import React, { useState } from "react";

interface RestaurantForm {
  food_name: string;
  food_rating: number | "";
  food_image: string;
  restaurant_name: string;
  restaurant_logo: string;
  restaurant_status: "Open Now" | "Closed" | "";
}
interface AddRestaurantModalProps {
  closeModal: () => void;
}
const AddRestaurantModal = ({ closeModal }: AddRestaurantModalProps) => {
  const [formData, setFormData] = useState<RestaurantForm>({
    food_name: "",
    food_rating: "",
    food_image: "",
    restaurant_name: "",
    restaurant_logo: "",
    restaurant_status: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.food_name) newErrors.food_name = "Food Name is required";
    if (formData.food_rating === "" || isNaN(Number(formData.food_rating)))
      newErrors.food_rating = "Food Rating must be a number";
    if (!formData.food_image)
      newErrors.food_image = "Food Image URL is required";
    if (!formData.restaurant_name)
      newErrors.restaurant_name = "Restaurant Name is required";
    if (!formData.restaurant_logo)
      newErrors.restaurant_logo = "Restaurant Logo URL is required";
    if (
      formData.restaurant_status !== "Open Now" &&
      formData.restaurant_status !== "Closed"
    )
      newErrors.restaurant_status =
        "Restaurant Status must be ‘Open Now’ or ‘Closed’";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
      // Reset form after submission
      setFormData({
        food_name: "",
        food_rating: "",
        food_image: "",
        restaurant_name: "",
        restaurant_logo: "",
        restaurant_status: "",
      });
      setErrors({});
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg  w-full max-w-4xl px-2 py-8">
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto px-2 py-8">
          <div className="mb-4">
            <label htmlFor="food_name" className="block font-medium">
              Food Name
            </label>
            <input
              type="text"
              name="food_name"
              id="food_name"
              placeholder="Enter food name"
              className="border rounded-md w-full p-2 bg-[#F5F5F5] border-none focus:border-none"
              value={formData.food_name}
              onChange={handleChange}
            />
            {errors.food_name && (
              <p id="food-name-error" className="text-red-500 text-sm">
                {errors.food_name}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="food_rating" className="block font-medium">
              Food Rating
            </label>
            <input
              type="number"
              name="food_rating"
              id="food_rating"
              placeholder="Enter food rating"
              className="border rounded-md w-full p-2 bg-[#F5F5F5] border-none focus:border-none"
              value={formData.food_rating.toString()}
              onChange={handleChange}
            />
            {errors.food_rating && (
              <p id="food-rating-error" className="text-red-500 text-sm">
                {errors.food_rating}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="food_image" className="block font-medium">
              Food Image URL
            </label>
            <input
              type="text"
              name="food_image"
              id="food_image"
              placeholder="Enter food image URL"
              className="border rounded-md w-full p-2 bg-[#F5F5F5] border-none focus:border-none"
              value={formData.food_image}
              onChange={handleChange}
            />
            {errors.food_image && (
              <p id="food-image-error" className="text-red-500 text-sm">
                {errors.food_image}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="restaurant_name" className="block font-medium">
              Restaurant Name
            </label>
            <input
              type="text"
              name="restaurant_name"
              id="restaurant_name"
              placeholder="Enter restaurant name"
              className="border rounded-md w-full p-2 bg-[#F5F5F5] border-none focus:border-none"
              value={formData.restaurant_name}
              onChange={handleChange}
            />
            {errors.restaurant_name && (
              <p id="restaurant-name-error" className="text-red-500 text-sm">
                {errors.restaurant_name}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="restaurant_logo" className="block font-medium">
              Restaurant Logo URL
            </label>
            <input
              type="text"
              name="restaurant_logo"
              id="restaurant_logo"
              placeholder="Enter restaurant logo URL"
              className="border rounded-md w-full p-2 bg-[#F5F5F5] border-none focus:border-none"
              value={formData.restaurant_logo}
              onChange={handleChange}
            />
            {errors.restaurant_logo && (
              <p id="restaurant-logo-error" className="text-red-500 text-sm">
                {errors.restaurant_logo}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="restaurant_status" className="block font-medium">
              Restaurant Status
            </label>
            <select
              name="restaurant_status"
              id="restaurant_status"
              className="border rounded-md w-full p-2 bg-[#F5F5F5] border-none focus:border-none"
              value={formData.restaurant_status}
              onChange={handleChange}
            >
              <option value="">Select status</option>
              <option value="Open Now">Open Now</option>
              <option value="Closed">Closed</option>
            </select>
            {errors.restaurant_status && (
              <p id="restaurant-status-error" className="text-red-500 text-sm">
                {errors.restaurant_status}
              </p>
            )}
          </div>
          <div className="flex justify-between gap-4">
            {" "}
            <button
              type="submit"
              className="bg-[#FFBA26] w-[50%] text-white px-4 py-2 rounded-md "
            >
              Add Food
            </button>
            <button
              onClick={closeModal}
              className="bg-gray-100 w-[50%] text-black px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurantModal;
