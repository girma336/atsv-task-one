import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white flex justify-between items-center">
      <div>
        <h1>FoodWagen</h1>
      </div>
      <div>
        <button>Add food</button>
      </div>
    </nav>
  );
};

export default Navbar;
