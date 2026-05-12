import React from "react";
import { ShoppingBag } from "lucide-react";

function TrendyPlant({
  image,
  title,
  description,
  price,
  buttonText = "Explore"
}) {
  return (
    <div className="px-4 md:px-10 py-4">
      <div className="flex flex-col md:flex-row items-center  justify-between w-full max-w-[1100px] mx-auto min-h-[350px] rounded-[70px] md:rounded-[100px] border border-white/20  backdrop-blur-md overflow-hidden">

        
        <div className="relative bg-transparent  flex justify-center items-center w-full md:w-1/2 ">

          <img
            src={image}
            alt={title}
            className="relative z-10 md:-top-10 w-[220px]  sm:w-[280px] md:w-[400px]"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-10  text-white">

          <h2 className="text-1xl md:text-2xl font-bold   inline-block px-3 py-2 rounded-md">
            {title}
          </h2>

          <p className="mt-2 text-sm md:text-base leading-7">
            {description}
          </p>

          <h1 className="text-1xl md:text-2xl font-bold mt-2">
            Rs. {price}/-
          </h1>

          <div className="flex items-center gap-4 mt-2">

            <button className="border border-white px-6 py-1 rounded-md hover:bg-black/10 transition">
              {buttonText}
            </button>

            <button className="border border-white p-3 rounded-md hover:bg-black/10 transition">
              <ShoppingBag size={10} />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendyPlant;