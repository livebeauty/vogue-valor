'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import MenCollection from './men-collection/menCollection';

const MenPage = () => {
  const [isSaleOpen, setIsSaleOpen] = useState(false);

  return (
    <div
      className=""
      onMouseEnter={() => setIsSaleOpen(true)}
      onMouseLeave={() => setIsSaleOpen(false)}
    >
      <Link 
        href="/sale" 
        className="relative px-2 font-montserrat font-bold uppercase">
        Man
        <span
          className={`absolute bottom-0 ${isSaleOpen ? "w-full " : "w-0"}
            left-0 h-[2px] bg-black transition-all
            top-4
             duration-500 ease-in-out `}>
        </span>
      </Link>

       <MenCollection isSaleOpen={isSaleOpen}/>
    </div>
  );
};

export default MenPage;