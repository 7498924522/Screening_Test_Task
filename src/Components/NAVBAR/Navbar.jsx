import React, { useState } from "react";
import Top_Logo from "../../assets/plant.png";
import search_Logo from "../../assets/searchbar.png";
import Bag from "../../assets/bag.png";
import { Menu, X } from "lucide-react";
function Navbar() {
  const [openMenu, setopenMenu] = useState(false);
  return (
    <div>
      <nav className="flex justify-between items-center bg-yellow-400 px-4">
        <div className="flex items-center md:p-4 p-2">
          <img className="h-6 w-6" src={Top_Logo} alt="none" />
          <p className="font-bold">FloraVision.</p>
        </div>

        <ul className="hidden md:flex items-center md:gap-24 gap-6 px-4">
          <li>Home</li>
          <li>Plants Type</li>
          <li>More</li>
          <li>Contact</li>
        </ul>

        <div className="flex items-center md:gap-8 gap-6 p-4">
          <img className="h-4 w-4" src={search_Logo} alt="none" />
          <img className="h-4 w-4" src={Bag} alt="none" />
          <button
            className="md:hidden text-white"
            onClick={() => setopenMenu(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>
      {/*specially open when we use this application in phone*/}
      {openMenu && (
        <div className="fixed inset-0 bg-black/50 z-40">
          <div className="fixed top-0 right-0 h-full w-64 bg-white p-6 shadow-lg z-50">
            <div className="flex justify-end">
              <button onClick={() => setopenMenu(false)}>
                <X size={24} />
              </button>
            </div>

            <ul className="flex flex-col gap-6 mt-8 text-lg">
              <li className="hover:bg-black/10 hover:text-red-400 rounded-md">
                Home
              </li>
              <li className="hover:bg-black/10 hover:text-red-400 rounded-md">
                Plants Type
              </li>
              <li className="hover:bg-black/10 hover:text-red-400 rounded-md">
                More
              </li>
              <li className="hover:bg-black/10 hover:text-red-400 rounded-md">
                Contact
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
