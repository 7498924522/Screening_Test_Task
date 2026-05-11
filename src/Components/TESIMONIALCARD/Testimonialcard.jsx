import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
const TestimonialCard = ({ image, name, review }) => {
  return (
    <div
      className="w-[350px] rounded-[25px] p-6 md:mx-2
    bg-white/10 backdrop-blur-md border text-white border-white/20"
    >
      {/*Here's The Profile Photo Part  */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>
          <h2 className="text-white text-xl font-semibold">{name}</h2>

          
          <div className="flex gap-1 text-yellow-400 mt-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
        </div>
      </div>

      <p className="text-gray-300 mt-4 leading-7">"{review}"</p>
    </div>
  );
};

export default TestimonialCard;
