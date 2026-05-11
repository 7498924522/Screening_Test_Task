import React from 'react'
import Rose_Gold from '../../assets/Rose Gold.png'
// import {ChevronRight} from "lucide-react";
function TopSellingPlants() {
  return (
    <div>
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
                <p className="text-xs text-[#7a8a9a] mb-1">Indoor Plant</p>

                <div className="flex items-center justify-between mb-4">
                  <p className="text-lg font-medium text-[#e8eaf0]">
                    Aglaonema plant
                  </p>
                  <button className="w-6 h-6 rounded-full border border-[#3a4a5a] flex items-center justify-center">
                    <ChevronRight className="w-3 h-3 text-[#7a8a9a]" />
                  </button>
                </div>

                <button className="w-full py-3 border border-[#3a4a6a] rounded-xl text-[#c8d0e0] text-sm">
                  Buy Now
                </button>

                <div className="flex justify-center gap-1.5 mt-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#e8eaf0]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3a4a5a]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3a4a5a]" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TopSellingPlants
