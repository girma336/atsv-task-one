"use client";
import React, { useState } from "react";
import AddRestaurantModal from "../modal/AddRestaurantModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <nav className="fixed left-0 top-0 z-50 w-full  bg-white">
      <div className="flex max-w-5xl container justify-between mx-auto py-4">
        <div>
          <h1 className="text-3xl text-[#F17228]">FoodWagen</h1>
        </div>
        <div>
          <button
            onClick={handleOpenModal}
            className="bg-[#F17228] w-full rounded-2xl px-6 py-3"
          >
            Add food
          </button>
        </div>
      </div>
      {isModalOpen && <AddRestaurantModal closeModal={handleCloseModal} />}
    </nav>
  );
};

export default Navbar;
