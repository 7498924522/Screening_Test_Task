import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import BackGround_image from "./assets/bg.jpg";
import Rose_Gold from "./assets/Rose Gold.png";
import Rose_Gold1 from "./assets/Rose Gold1.png";
import Rose_Gold2 from "./assets/Rose Gold6.png";
import Rose_Gold3 from "./assets/Rose Gold3.png";
import Rose_Gold4 from "./assets/Rose Gold4.png";
import Rose_Gold5 from "./assets/Rose Gold5.png";

// Users Review Profile Image
import User1 from "./assets/shelly Russel.png";
import User2 from "./assets/Lula Rolfson.jpg";
import User3 from "./assets/Carol Huels.png";

import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/NAVBAR/Navbar";
import TopSellingPlants from "./Components/PLANTCARD/TopSellingPlants";
import SectionTitle from "./Components/SECTIONTITLE/SectionTitle";
import TestimonialCard from "./Components/TESIMONIALCARD/Testimonialcard";
import TrendyPlant from "./Components/PLANTCARD/TrendyPlant";
import Footer from "./Components/FOOTER/Footer";

function App() {
  const testimonials = [
    {
      id: 1,
      image: User1,
      name: "Shelly Russel",
      review:
        "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!",
    },
    {
      id: 2,
      image: User2,
      name: "Lula Rolfson",
      review:
        "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
    },
    {
      id: 3,
      image: User3,
      name: "Carol Huels",
      review:
        "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
    },
  ];

  const Top_Selling_Plats = [
    {
      id: 1,
      image: Rose_Gold,
      name: "Alglaonema Plant",
      descreption:
        "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
      price: 100,
    },
    {
      id: 2,
      image: Rose_Gold1,
      name: "Plantain Lilies",
      descreption:
        "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
      price: 380,
    },
    {
      id: 3,
      image: Rose_Gold3,
      name: "Cactus",
      descreption:
        "It is known for their ability to thrive in arid environments",
      price: 259,
    },
    {
      id: 4,
      image: Rose_Gold4,
      name: "Swiss cheese Plant",
      descreption:
        "It is a popular tropical houseplant known for its distinctive, perforated leaves",
      price: 400,
    },
    {
      id: 5,
      image: Rose_Gold5,
      name: "Sansevieria plant",
      descreption:
        "It is a popular indoor plant admired for its striking appearance and low-maintenance nature",
      price: 450,
    },
    {
      id: 6,
      image: Rose_Gold2,
      name: "Agave plant",
      descreption:
        "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
      price: 359,
    },
  ];
  return (
    <>
      <div
        className="min-h-screen bg-no-repeat bg-cover relative"
        style={{
          backgroundImage: `url(${BackGround_image})`,
          backgroundPosition: "top -120px center",
        }}
      >
        <Navbar />
        <Home />
      </div>
      <div className="bg-green-950">
        <SectionTitle title="Our Top Selling Plants" />

        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {Top_Selling_Plats.map((item) => (
            <TopSellingPlants
              key={item.id}
              image={item.image}
              name={item.name}
              descreption={item.descreption}
              price={item.price}
            />
          ))}
        </div>

        <SectionTitle title="Customer Review" />

        <div className="md:flex  md:ml-20  md:mx-0 mx-10  sm:py-5 md:mt-10 sm:my-10">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              image={item.image}
              name={item.name}
              review={item.review}
            />
          ))}
        </div>

        <SectionTitle title="Our Best 2" />
      
        <div className="flex flex-col md:flex-row items-center   justify-between w-auto  max-w-[1100px] mx-auto min-h-[350px] rounded-[70px] md:rounded-[100px] border  border-gray-500 bg-[#1e2a1e] backdrop-blur-md overflow-hidden">
          <div className="relative bg-transparent  flex justify-center items-center w-full md:w-1/2 ">
            <img
              src={Rose_Gold}
              className="relative z-10 -top-4 w-[220px]  sm:w-[280px] md:w-[400px]"
            />
          </div>

          <div className="w-full md:w-1/2 p-6 md:p-10  text-white">
            <h2 className="text-1xl md:text-2xl font-semibold   inline-block  py-2 rounded-md">
              We Have Small And Best O2 Plants Collection's
            </h2>

            <span className="mt-2 text-sm md:text-base ">
              Oxygen-producing plants, often referred to as "O2 plants," are
              those that release oxygen into the atmosphere through the process
              of photosynthesis.
            </span>
            <br />
            <br />
            <span className="text-sm md:text-base">
              Many plants can help filter out pollutants and toxins from the
              air, such as formaldehyde, benzene, and trichloroethylene. This
              makes the air cleaner and healthier to breathe.
            </span>

            <div className="flex items-center justify-between gap-4 mt-4">
              <button className="border border-white px-6 py-1 rounded-md hover:bg-black/10 transition">
                Explore
              </button>
              <div className="flex">
                <span className="text-gray-400">
                  <FaAngleLeft size={25} />
                </span>
                <p>01/04</p>
                <span>
                  {" "}
                  <FaAngleRight size={25} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-20 gap-2 my-4 ml-12">
          <div className="w-6 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>

       <Footer/>
      </div>
    </>
  );
}

export default App;
