 'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'
import Link from 'next/link'

const TrendingSeason = () => {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        breakpoints={{
        // For screens between 420px and 767px, show 2 slides
        320: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        425: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        640: {
        slidesPerView: 2,
        spaceBetween: 16,
        },
          
        // for small desktops
        768: {
        slidesPerView: 3,
        spaceBetween: 16,
        },
        // for large desktops
        1024: {
        slidesPerView: 4,
        spaceBetween: 24,
        },
        }}
        className="mt-12"
      >
        <SwiperSlide>
          <Link href="/test" className="w-full xl:w-full flex flex-col gap-4 pl-1">
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
              <Image
                src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rose"
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
              />
              <Image
                src="https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rose"
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Product name</span>
              <span className="font-semibold">$49</span>
            </div>
            <div className="text-sm text-gray-500">My description</div>
            <button className="rounded-2xl ring-1 ring-[#f35c7a] text-[#f35c7a] w-max py-2 px-4 text-xs hover:bg-[#f35c7a] hover:text-white pb-2 mb-4 overflow-visible">
              Add to cart
            </button>
          </Link>
        </SwiperSlide>

        {/* Add more SwiperSlide items here as needed */}
        <SwiperSlide>
          <Link href="/test" className="w-full xl:w-full flex flex-col gap-4 pl-1">
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
              <Image
                src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rose"
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
              />
              <Image
                src="https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rose"
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Product name</span>
              <span className="font-semibold">$49</span>
            </div>
            <div className="text-sm text-gray-500">My description</div>
            <button className="rounded-2xl ring-1 ring-[#f35c7a] text-[#f35c7a] w-max py-2 px-4 text-xs hover:bg-[#f35c7a] hover:text-white pb-2 mb-4 overflow-visible">
              Add to cart
            </button>
          </Link>
        </SwiperSlide>

        {/* ------------------------------------- */}
        <SwiperSlide>
          <Link href="/test" className="w-full xl:w-full flex flex-col gap-4 pl-1">
            <div className="relative w-full  h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
              <Image
                src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rose"
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
              />
              <Image
                src="https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rose"
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Product name</span>
              <span className="font-semibold">$49</span>
            </div>
            <div className="text-sm text-gray-500">My description</div>
            <button className="rounded-2xl ring-1 ring-[#f35c7a] text-[#f35c7a] w-max py-2 px-4 text-xs hover:bg-[#f35c7a] hover:text-white pb-2 mb-4 overflow-visible">
              Add to cart
            </button>
          </Link>
        </SwiperSlide>
        {/* --------------------------------- */}
        <SwiperSlide>
          <Link href="/test" className="w-full xl:w-full flex flex-col gap-4 pl-1">
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
              <Image
                src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rose"
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
              />
              <Image
                src="https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rose"
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Product name</span>
              <span className="font-semibold">$49</span>
            </div>
            <div className="text-sm text-gray-500">My description</div>
            <button className="rounded-2xl ring-1 ring-[#f35c7a] text-[#f35c7a] w-max py-2 px-4 text-xs hover:bg-[#f35c7a] hover:text-white pb-2 mb-4 overflow-visible">
              Add to cart
            </button>
          </Link>
        </SwiperSlide>
        {/* -------------------------------- */}
        <SwiperSlide>
          <Link href="/test" className="w-full xl:w-full flex flex-col gap-4 pl-1">
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
              <Image
                src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rose"
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
              />
              <Image
                src="https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rose"
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Product name</span>
              <span className="font-semibold">$49</span>
            </div>
            <div className="text-sm text-gray-500">My description</div>
            <button className="rounded-2xl ring-1 ring-[#f35c7a] text-[#f35c7a] w-max py-2 px-4 text-xs hover:bg-[#f35c7a] hover:text-white pb-2 mb-4 overflow-visible">
              Add to cart
            </button>
          </Link>
        </SwiperSlide>
        {/* ------------------------------------------------------- */}
        <SwiperSlide>
          <Link href="/test" className="w-full xl:w-full flex flex-col gap-4 pl-1">
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
              <Image
                src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rose"
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
              />
              <Image
                src="https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rose"
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Product name</span>
              <span className="font-semibold">$49</span>
            </div>
            <div className="text-sm text-gray-500">My description</div>
            <button className="rounded-2xl ring-1 ring-[#f35c7a] text-[#f35c7a] w-max py-2 px-4 text-xs hover:bg-[#f35c7a] hover:text-white pb-2 mb-4 overflow-visible">
              Add to cart
            </button>
          </Link>
        </SwiperSlide>
        {/* ----------------------------------------- */}
        <SwiperSlide>
          <Link href="/test" className="w-full xl:w-full flex flex-col gap-4 pl-1">
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
              <Image
                src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rose"
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
              />
              <Image
                src="https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rose"
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Product name</span>
              <span className="font-semibold">$49</span>
            </div>
            <div className="text-sm text-gray-500">My description</div>
            <button className="rounded-2xl ring-1 ring-[#f35c7a] text-[#f35c7a] w-max py-2 px-4 text-xs hover:bg-[#f35c7a] hover:text-white pb-2 mb-4 overflow-visible">
              Add to cart
            </button>
          </Link>
        </SwiperSlide>
        {/* -------------------------------------- */}
        <SwiperSlide>
          <Link href="/test" className="w-full xl:w-full flex flex-col gap-4 pl-1">
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
              <Image
                src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rose"
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
              />
              <Image
                src="https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rose"
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Product name</span>
              <span className="font-semibold">$49</span>
            </div>
            <div className="text-sm text-gray-500">My description</div>
            <button className="rounded-2xl ring-1 ring-[#f35c7a] text-[#f35c7a] w-max py-2 px-4 text-xs hover:bg-[#f35c7a] hover:text-white pb-2 mb-4 overflow-visible">
              Add to cart
            </button>
          </Link>
        </SwiperSlide>
        {/* ------------------------------------------------ */}
      </Swiper>
    </>
  )
}

export default TrendingSeason
