import React from 'react'

const Skeletons = () => {
  return (
    <div className="animate-pulse">
      {/* Skeleton for image */}
      <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-gray-200 rounded-md mb-4"></div>

      {/* Skeleton for text */}
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>

      {/* Skeleton for button */}
      <div className="h-10 bg-gray-200 rounded-lg w-1/2"></div>
    </div>
  )
}

export default Skeletons;
