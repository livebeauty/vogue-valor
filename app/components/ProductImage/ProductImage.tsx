'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Initialize the Pagination module
import { Pagination } from 'swiper/modules';


const ProductImage = ({item}: {item:any}) => {
const [index, setIndex] = useState(0)

return (
<div className='flex flex-col lg:flex-row items-center mt-8 gap-4'>
    {/* Large screen: Small images on the left and large image on the right */}
    <div className='hidden lg:flex flex-col gap-4'>
    {item.map((img:any, indx:number) => (
    <div
    className={`w-24 h-24 relative cursor-pointer rounded-md ${indx === index ? 'border-2 border-red-500' : 'border'} `}
    key={img._id}
    onClick={() => setIndex(indx)}
    >
    <Image
    src={img.image?.url}
    alt=""
    fill
    sizes='30vw'
    className='object-cover rounded-md'/>
    </div>
    ))}
    </div>

    {/* Large Image */}
    <div className='h-[450px] w-[450px] relative hidden lg:block'>
        <Image
        src={item[index].image?.url}
        alt=""
        fill
        sizes='50vw'
        className='object-cover rounded-md'
        />
    </div>

    {/* Small screen: Swiper slider with dots below */}
    <div className='lg:hidden w-full'>
        <Swiper
        spaceBetween={10}
        pagination={{ clickable: true, el: '.custom-swiper-pagination' }} // Use custom pagination class
        slidesPerView={1}
        modules={[Pagination]}
        grabCursor={true}
        onSlideChange={(swiper) => setIndex(swiper.activeIndex)}>

        {item.map((img:any) => (
        <SwiperSlide key={img._id}>
        <div className='h-[300px] w-full relative'>
        <Image
        src={img.image?.url}
        alt=""
        fill
        sizes='50vw'
        className='object-cover rounded-md'
        />
        </div>
        </SwiperSlide>
                    ))}
        </Swiper>
    {/* Custom pagination element for dots below the image */}
            <div className="custom-swiper-pagination mt-4"></div>
        </div>
    </div>
    )
}

export default ProductImage;
