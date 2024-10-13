'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { heroSlides } from './HeroSlides';
import Link from 'next/link';

const HeroPage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
   const interval = setInterval(() => {
    setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
   }, 3000);

   return () => clearInterval(interval)
  }, [])
  

  return (
    <>
    <div className=" h-[calc(100vh-16vh)] overflow-hidden">
      <div className='w-max h-full flex transition-all ease-in-out duration-1000'
        style={{ transform: `translateX(-${current * 100}vw)`}}>
      {heroSlides.map((silde) => (
        <div className={`${silde.bg} w-screen h-full flex flex-col gap-8 xl:flex-row`} key={silde.id}>
          {/* TEXT CONTAINER */}
          <div className='h-1/3 xl:h-full xl:w-1/3 flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center'>
            <h2 className='text-xl lg:text-2xl 2xl:text-4xl text-red-700'>{silde.discount}</h2>
            <h1 className='text-4xl lg:text-5xl 2xl:text-8xl font-bold'>{silde.title}</h1>
            <Link href={silde.url}>
              <button className='rounded-md bg-black text-white py-3 px-4'>Shop Now</button>
            </Link>
          </div>
          {/* IMAGE CONTAINER */}
          <div className='xl:h-full xl:w-2/3 h-2/3 relative'>
            <Image
              src={silde.backgroundImage}
              alt=''
              fill
              sizes='100%'
              className='object-cover' />
          </div>
        </div>
      ))}
    </div><div className='absolute m-auto left-1/2 bottom-8 flex gap-4'>
        {heroSlides.map((silde, index) => (
          <div className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center 
        ${current === index ? "scale-150" : ""}
        `} key={silde.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (<div className='w-[6px] h-[6px] bg-white rounded-full'></div>)}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default HeroPage;
