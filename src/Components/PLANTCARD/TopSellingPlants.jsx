import React from 'react'
import Rose_Gold from '../../assets/Rose Gold.png'
import {ChevronRight, ShoppingBag} from "lucide-react";
import SectionTitle from '../SECTIONTITLE/SectionTitle';
const TopSellingPlants = ({ image, name,descreption,price }) => {
  return (
    <div>
      
      <div className="flex justify-center  px-4 md:px-10 h-full">
          
          <div className="relative w-[300px] bg-[#1e2a1e]  rounded-[32px]  overflow-visible shadow-2xl mt-20">
         
            <div className="relative h-[190px] flex items-end justify-center rounded-t-[32px] z-20">
              <div className="absolute inset-0 bg-[#1e2a1e]   rounded-t-[32px]" />
              <img
                src={image}
                className="relative  w-52 object-contain  -top-10 drop-shadow-xl bg-transparent"
              />
            </div>

            <div className="relative w-[220px]  rounded-[32px]  ml-10">
              
              <div className="px-5">
               
                <div className="flex items-center justify-between ">
                  <p className="text-lg font-medium text-white">
                    {name}
                  </p>
                  
                </div>

                <p className="w-full py-3   rounded-xl text-gray-300 text-sm">
                  {descreption}
                </p>
                <div className='flex justify-between mb-2'>
                   <p className="text-sm text-gray-300 md:text-xl font-medium mt-2">
                  Rs. {price}/-
                 </p>
                 <ShoppingBag className='text-gray-300 mt-2'/>
                </div>
               
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TopSellingPlants
