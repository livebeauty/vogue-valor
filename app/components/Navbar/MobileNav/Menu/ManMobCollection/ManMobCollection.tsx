import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';


interface ManMobCollectionProps {
  navigateToSection: (section: string) => void;
}

const ManMobCollection: React.FC<ManMobCollectionProps>  = ({ navigateToSection }) => {
  return (
    <>
      {/* Top */}
      <div className="w-full flex justify-between items-center mt-4">
        <div className="flex items-center">
          <Image
            src="/images/top men.jpg"
            alt="Top"
            width={40}
            height={40}
            className="rounded-full"
            style={{ height: 'auto', width: 'auto' }} 
          />
          <Link href="#" className="ml-2 text-gray-800 font-bold text-xl">Top</Link>
        </div>
        <button onClick={() => navigateToSection('Top-men')} className="text-gray-800 focus:outline-none">
          <GoArrowRight className='w-7 h-7' />
        </button>
      </div>

      {/* Bottom */}
      <div className="w-full flex justify-between items-center mt-4">
        <div className="flex items-center">
          <Image
            src="/images/bottom mens.png"
            alt="Bottom"
            width={40}
            height={40}
            className="rounded-full"
            style={{ height: 'auto', width: 'auto' }} 
          />
          <Link href="#" className="ml-2 text-gray-800 font-bold text-xl">Bottom</Link>
        </div>
        <button onClick={() => navigateToSection('Bottom-men')} className="text-gray-800 focus:outline-none">
          <GoArrowRight className='w-7 h-7' />
        </button>
      </div>

     {/* Outerwear */}
      <div className="w-full flex justify-between items-center mt-4">
        <div className="flex items-center">
          <Image
            src="/images/outer-wears.png"
            alt="Bottom"
            width={40}
            height={40}
            className="rounded-full"
            style={{ height: 'auto', width: 'auto' }} 
          />
          <Link href="#" className="ml-2 text-gray-800 font-bold text-xl">Outerwear</Link>
        </div>
        <button onClick={() => navigateToSection('Outerwear-men')} className="text-gray-800 focus:outline-none">
          <GoArrowRight className='w-7 h-7' />
        </button>
      </div>


      {/* Activewear */}
      <div className="w-full flex justify-between items-center mt-4">
        <div className="flex items-center">
          <Image
            src="/images/active-wear.png"
            alt="Bottom"
            width={40}
            height={40}
            className="rounded-full"
            style={{ height: 'auto', width: 'auto' }} 
          />
          <Link href="#" className="ml-2 text-gray-800 font-bold text-xl">Activewear</Link>
        </div>
        <button onClick={() => navigateToSection('Activewear-men')} className="text-gray-800 focus:outline-none">
          <GoArrowRight className='w-7 h-7' />
        </button>
      </div>
    </>
  );
}

export default ManMobCollection;
