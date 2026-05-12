import React from "react";
import Top_Logo from "../../assets/plant.png";
function Footer() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-gray-200">
        <div className="">
          <div className="flex items-center md:p-4 p-2">
            <img className="h-8 w-8" src={Top_Logo} alt="none" />
            <p className="font-bold">FloraVision.</p>
          </div>
          <p className="px-10">
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </p>
        </div>
        <div>
          <h2 className="text-center font-bold">Quick Link's</h2>

          <div className="md:ml-40 ml-10 my-3">
            <h2 className="">Home</h2>
            <h2 className="">Types Of plant's</h2>
            <h2 className="">Contact</h2>
            <h2 className="">Privacy</h2>
          </div>
        </div>
        <div>
          <h2 className="font-bold md:ml-0 ml-4 ">For Every Update</h2>
          <div className="relative w-full max-w-[380px] mt-8 mx-auto md:mx-0 px-4 md:px-0">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border border-white rounded-md bg-transparent text-white px-4 py-3 pr-[130px] outline-none"
            />

            <button className="absolute right-5 md:right-1 top-1 bottom-1 px-4 md:px-5 bg-white text-black font-semibold rounded-md text-sm md:text-base">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between md:gap-0 gap-5 text-gray-200 px-10 py-10">
        <div className="flex font-semibold gap-6">
          <p>FB</p>
          <p>TW</p>
          <p>LI</p>
        </div>

        <div className="flex">
          <p>FloraVision © all right reserve</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
