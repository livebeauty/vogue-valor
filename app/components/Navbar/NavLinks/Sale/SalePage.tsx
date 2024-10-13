'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const SalePage = () => {
  const [isSaleOpen, setIsSaleOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsSaleOpen(true)}
      onMouseLeave={() => setIsSaleOpen(false)}
    >
      <Link 
        href="/sale" 
        className="relative px-2 font-montserrat font-bold uppercase">
        Sale
        <span
          className={`absolute bottom-0 ${isSaleOpen ? "w-full " : "w-0"}
            left-0 h-[2px] bg-black transition-all
            top-4
             duration-500 ease-in-out `}
        ></span>
      </Link>

      <div
        className={`absolute left-[0%] top-[75%] mt-2 bg-white py-8 px-8 w-[80vw] max-w-[calc(100vw-4rem)] h-[460px] transition-opacity duration-300 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] ease-in-out ${isSaleOpen ? 'opacity-100' : 'opacity-0'} z-50`}
        style={{ visibility: isSaleOpen ? 'visible' : 'hidden' }}
      >
        <ul className="grid grid-cols-4 gap-8">
          <li className="cursor-pointer">
            <Image
              src="/images/Navbar image/Dress logo/women section/women new arrival.png"
              alt="Women"
              width={250}
              height={150}
            />
            <Link href="/women" className="text-center hover:underline flex justify-center hover:font-semibold">
              New arrival for women
            </Link>
          </li>
          <li className="cursor-pointer">
            <Image
              src="/images/Navbar image/Dress logo/men section/men.png"
              alt="Men"
              width={250}
              height={150}
            />
            <Link href="/men" className="text-center hover:underline flex justify-center hover:font-semibold">
              New arrival for men
            </Link>
          </li>
          <li>
            <ul className="mt-2 space-y-1 flex items-center flex-col justify-center gap-4">
              <li><Link className="font-semibold hover:text-red-500 hover:underline" href="/sale/women">Sale on Woman</Link></li>
              <li><Link className="font-semibold hover:text-red-500 hover:underline" href="/sale/men">Sale on Man</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SalePage;
