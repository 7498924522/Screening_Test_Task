import React from 'react'
import { CirclePlay, ChevronRight,ShoppingBag } from 'lucide-react'
import user1 from '../assets/Ronnie Hamill.png'
import Rose_Gold from '../assets/Rose Gold.png'
import Rose_Gold1 from '../assets/Rose Gold1.png'
import Rose_Gold2 from '../assets/Rose Gold2.png'
import TestimonialCard from '../Components/TESIMONIALCARD/Testimonialcard'
import Navbar from '../Components/NAVBAR/Navbar'
import SectionTitle from '../Components/SECTIONTITLE/SectionTitle'
import TrendyPlant from '../Components/PLANTCARD/TrendyPlant'
function Home() {
  const testimonials = [
    {
      id: 1,
      image: user1,
      name: 'Ronnie Hamill',
      review:
        "I can't express how thrilled i am with my new natural plants! They bring such a fresh and vibrant energy to my home.",
    },

    
  ]

  return (
    <div>
      <div className=" grid md:grid-cols-2 grid-cols-1 min-h-screen text-white">
        
        <div className="w-full px-4 md:px-8 my-8 md:my-14">
          <p className="font-bold text-4xl sm:text-5xl md:text-6xl leading-none">
            Earth's Exhale
          </p>

          <p className="mt-3 text-sm sm:text-base md:text-lg max-w-[700px]">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's
            natural environment and its essential role in sustaining life.
          </p>

          
          <div className="flex gap-3 md:gap-5 items-center mt-5">
            <button className="border px-6 py-2 rounded-lg">Buy Now</button>

            <CirclePlay size={42} />

            <p style={{ fontFamily: "'Indie Flower', cursive" }}>Live Demo...</p>
          </div>
        </div>
     
        <div className="flex justify-center md:justify-end px-4 md:px-10 mt-20">
          <div className="relative w-[300px] bg-[#1e2a1e]  rounded-[32px] pb-6 overflow-visible shadow-2xl">
         
            <div className="relative h-[190px] flex items-end justify-center rounded-t-[32px] z-20">
              <div className="absolute inset-0 bg-[#1e2a1e]  rounded-t-[32px]" />
              <img
                src={Rose_Gold}
                alt="Aglaonema Plant"
                className="relative z-10 w-52 object-contain  -top-12 drop-shadow-xl bg-transparent"
              />
            </div>

            <div className="relative w-[220px] bg-[#1e2a1e] rounded-[32px] pb-3 ml-10">
              
              <div className="px-5">
                <p className="text-xs text-white mb-1">Indoor Plant</p>

                <div className="flex items-center justify-between mb-4">
                  <p className="text-lg font-medium text-white">
                    Aglaonema plant
                  </p>
                  <button className="w-6 h-6 rounded-full border border-[#3a4a5a] flex items-center justify-center">
                    <ChevronRight className="w-3 h-3 text-white" />
                  </button>
                </div>

                <button className="w-full py-3 border border-[#3a4a6a] rounded-xl text-[#c8d0e0] text-sm">
                  Buy Now
                </button>

                <div className="flex items-center gap-2 my-4 ml-12">
  <div className="w-6 h-2 bg-white rounded-full"></div>
  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
</div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="md:ml-8 ">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              image={item.image}
              name={item.name}
              review={item.review}
            />
          ))}
        </div>
      </div>
      <SectionTitle title="Our Trendy Plants"/>
      <TrendyPlant
        image={Rose_Gold1}
        title="For Your Desks Decorations"
        description="I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!"
        price="599"
        buttonText="Explore"
      />

      <div className="px-4 md:px-10 py-4 ">
      <div className="flex flex-col md:flex-row items-center  justify-between w-full max-w-[1100px] mx-auto min-h-[350px] rounded-[100px] border border-white/20 backdrop-blur-md overflow-hidden">

        
        

        <div className="w-full md:w-1/2 p-6 md:p-10  text-white">

          <h2 className="text-1xl md:text-2xl font-bold  inline-block px-3 py-2 rounded-md">
            For Your Desks Decorations
          </h2>

          <p className="mt-2 text-sm md:text-base leading-7">
            The greenery addstouch of nature and serenity to my desk,making it fell more inviting and calm
          </p>

          <h1 className="text-1xl md:text-2xl font-bold mt-2">
            Rs. 399/-
          </h1>

          <div className="flex items-center gap-4 mt-2">

            <button className="border border-white px-6 py-1 rounded-md hover:bg-black/10 transition">
             Explore
            </button>

            <button className="border border-white p-3 rounded-md hover:bg-black/10 transition">
              <ShoppingBag size={10} />
            </button>

          </div>
        </div>

        <div className="relative bg-transparent  flex justify-center items-center w-full md:w-1/2 border-r border-white/20">

          <img
            src={Rose_Gold2}
            alt="none"
            className="relative z-10 -top-8 w-[220px]  sm:w-[280px] md:w-[400px]"
          />
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Home
