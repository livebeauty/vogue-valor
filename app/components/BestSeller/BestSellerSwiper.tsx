'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { products } from '@wix/stores';
import DOMPurify from "isomorphic-dompurify";


interface BestSellerProps {
  products: any[];
}

const BestSellerListSwiper: React.FC<BestSellerProps> = ({ products }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 16 },
        425: { slidesPerView: 2, spaceBetween: 16 },
        640: { slidesPerView: 2, spaceBetween: 16 },
        768: { slidesPerView: 3, spaceBetween: 16 },
        1024: { slidesPerView: 4, spaceBetween: 24 },
      }}
    >
      {products.map((product: products.Product) => (
        <SwiperSlide key={product._id}>
          <Link href={"/" + product.slug}>
            <div className="relative w-64 h-48 sm:h-56 md:h-64 lg:h-72 xl:h-72">
              <Image
                src={product.media?.mainMedia?.image?.url || "/product.png"}
                alt={product.name || ""}
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
              />
              {product.media?.items && (
                <Image
                  src={product.media?.items[1]?.image?.url || "/product.png"}
                  alt={product.name || ""}
                  fill
                  className="absolute object-cover rounded-md"
                />
              )}
            </div>
            <div className="flex justify-between mt-2">
              <span className="font-medium">{product.name}</span>
              <span className="font-semibold">${product.price?.price}</span>
            </div>
        
        
            {product.additionalInfoSections && (
              <div className='text-sm text-gray-500 mt-1' dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(
                product.additionalInfoSections.find(
                  (section: any) => section.title === "Helo"
                )?.description || "No description available"
              )}}>
                {}
              </div>
            )}
            <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-[#f35c7a] hover:text-white mt-2">
              Add to Cart
            </button>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BestSellerListSwiper;
