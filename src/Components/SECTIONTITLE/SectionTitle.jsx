import React from 'react'

const SectionTitle=({title})=> {
  return (
  <div className="flex justify-center items-center py-6">
  <div className="relative inline-block px-6 text-white font-medium text-3xl">

    
    <span className="absolute top-0 right-0 w-6 h-4 border-r-2 border-t-2 border-yellow-500 rounded-tr-md"></span>

    <span className="absolute bottom-0 left-0 w-4 h-6 border-l-2 border-b-2 border-yellow-500 rounded-bl-md"></span>

    {title}
  </div>
</div>
  );
}

export default SectionTitle
