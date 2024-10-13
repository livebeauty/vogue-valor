'use client'

import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { GoArrowRight } from 'react-icons/go';

interface WomanMobCollectionProps {
  navigateToSection: (section: string) => void;
}

const WomenMobCollection: React.FC<WomanMobCollectionProps> = ({ navigateToSection }) => {
    
  return (
    <>
       {/* Top */}
       <div className="w-full flex justify-between items-center mt-4">
        <div className="flex items-center">
          <Image
            src="/images/top.png"
            alt="Top"
            width={40}
            height={40}
            className="rounded-full"
            style={{ height: 'auto', width: 'auto' }} 
          />
          <Link href="#" className="ml-2 text-gray-800 font-bold text-xl">Top</Link>
        </div>
        <button onClick={() => navigateToSection('Top')} className="text-gray-800 focus:outline-none">
          <GoArrowRight className='w-7 h-7' />
        </button>
      </div>

      {/* Bottom */}
      <div className="w-full flex justify-between items-center mt-4">
        <div className="flex items-center">
          <Image
            src="/images/bottom.png"
            alt="Bottom"
            width={40}
            height={40}
            className="rounded-full"
            style={{ height: 'auto', width: 'auto' }} 
          />
          <Link href="#" className="ml-2 text-gray-800 font-bold text-xl">Bottom</Link>
        </div>
        <button onClick={() => navigateToSection('Bottom')} className="text-gray-800 focus:outline-none">
          <GoArrowRight className='w-7 h-7' />
        </button>
      </div>
       
       {/* Ethnic wear */}
      <div className="w-full flex justify-between items-center mt-4">
        <div className="flex items-center">
          <Image
            src="/images/ethnic wearss.png"
            alt="Bottom"
            width={40}
            height={40}
            className="rounded-full"
            style={{ height: 'auto', width: 'auto' }} 
          />
          <Link href="#" className="ml-2 text-gray-800 font-bold text-xl">Ethnic wear</Link>
        </div>
        <button onClick={() => navigateToSection('Ethnic wear')} className="text-gray-800 focus:outline-none">
          <GoArrowRight className='w-7 h-7' />
        </button>
      </div>

      {/* Dresses & jumpsuit */}
      <div className="w-full flex justify-between items-center mt-4">
        <div className="flex items-center">
          <Image
            src="/images/Dresses & Jumpsuitss.png"
            alt="Bottom"
            width={40}
            height={40}
            className="rounded-full"
            style={{ height: 'auto', width: 'auto' }} 
          />
          <Link href="#" className="ml-2 text-gray-800 font-bold text-xl">Dresses & Jumpsuits</Link>
        </div>
        <button onClick={() => navigateToSection('Dresses & Jumpsuits')} className="text-gray-800 focus:outline-none">
          <GoArrowRight className='w-7 h-7' />
        </button>
      </div>
      
      {/* activewear */}
      <div className="w-full flex justify-between items-center mt-4">
        <div className="flex items-center">
          <Image
            src="/images/activewear.png"
            alt="Bottom"
            width={40}
            height={40}
            className="rounded-full"
            style={{ height: 'auto', width: 'auto' }} 
          />
          <Link href="#" className="ml-2 text-gray-800 font-bold text-xl">Activewear</Link>
        </div>
        <button onClick={() => navigateToSection('Activewear')} className="text-gray-800 focus:outline-none">
          <GoArrowRight className='w-7 h-7' />
        </button>
      </div>

      {/* Outerwear */}
      <div className="w-full flex justify-between items-center mt-4">
        <div className="flex items-center">
          <Image
            src="/images/outerwear.png"
            alt="Bottom"
            width={40}
            height={40}
            className="rounded-full"
            style={{ height: 'auto', width: 'auto' }} 
          />
          <Link href="#" className="ml-2 text-gray-800 font-bold text-xl">Outerwear</Link>
        </div>
        <button onClick={() => navigateToSection('Outerwear')} className="text-gray-800 focus:outline-none">
          <GoArrowRight className='w-7 h-7' />
        </button>
      </div>
    </>
  )
}

export default WomenMobCollection