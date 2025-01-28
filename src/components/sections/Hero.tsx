import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <section className="bg-[#FFB30E] h-[668px] w-full flex items-end justify-center px-6">
      <div className="w-full max-w-7xl flex flex-col  md:flex-row items-center gap-4 justify-between ">
        {/* Left Content */}
        <div className="text-white mb-10 flex-1">
          <h1
            className="text-7xl font-extrabold"
            style={{ boxShadow: "0px 27px 82px 0px #FFAE0047" }}
          >
            Are you starving?
          </h1>
          <p className="text-xl font-normal py-1">
            Within a few clicks, find meals that are accessible near you
          </p>
          <div className="bg-white p-4 rounded-2xl shadow-lg w-full max-w-[856px] mt-2">
            <div className="space-y-4">
              <div className="text-center text-gray-700">Search for meals</div>
              <div className="flex  gap-2">
                <input
                  type="text"
                  placeholder="What do you like to eat today? "
                  className="w-full flex-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />{" "}
                <button className="[background:linear-gradient(95.71deg,#FF7A7A_-39.64%,#F75900_135.31%)] px-12 rounded-lg">
                  find food
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <img
            // fill
            // priority
            src="/images/herofood.png"
            alt="hero food image"
            className="aspect-video object-cover w-[597px] "
          />
        </div>
      </div>
    </section>
  );
};
