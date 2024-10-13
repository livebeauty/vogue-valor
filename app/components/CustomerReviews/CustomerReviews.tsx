'use client'

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const reviews = [
  {
    id: 1,
    name: 'Jane Doe',
    image: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    review: 'Amazing products! The quality is superb and the service was excellent.',
    productImage: 'https://images.pexels.com/photos/2328154/pexels-photo-2328154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    name: 'Jane Doe',
    image: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    review: 'Amazing products! The quality is superb and the service was excellent.',
    productImage: 'https://images.pexels.com/photos/2328154/pexels-photo-2328154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    name: 'Jane Doe',
    image: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    review: 'Amazing products! The quality is superb and the service was excellent.',
    productImage: 'https://images.pexels.com/photos/2328154/pexels-photo-2328154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },

  {
    id: 4,
    name: 'Jane Doe',
    image: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    review: 'Amazing products! The quality is superb and the service was excellent.',
    productImage: 'https://images.pexels.com/photos/2328154/pexels-photo-2328154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 5,
    name: 'Jane Doe',
    image: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    review: 'Amazing products! The quality is superb and the service was excellent.',
    productImage: 'https://images.pexels.com/photos/2328154/pexels-photo-2328154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 6,
    name: 'Jane Doe',
    image: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    review: 'Amazing products! The quality is superb and the service was excellent.',
    productImage: 'https://images.pexels.com/photos/2328154/pexels-photo-2328154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 7,
    name: 'Jane Doe',
    image: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    review: 'Amazing products! The quality is superb and the service was excellent.',
    productImage: 'https://images.pexels.com/photos/2328154/pexels-photo-2328154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 8,
    name: 'Jane Doe',
    image: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    review: 'Amazing products! The quality is superb and the service was excellent.',
    productImage: 'https://images.pexels.com/photos/2328154/pexels-photo-2328154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 9,
    name: 'Jane Doe',
    image: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    review: 'Amazing products! The quality is superb and the service was excellent.',
    productImage: 'https://images.pexels.com/photos/2328154/pexels-photo-2328154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },

];



const CustomerReviews: React.FC = () => {

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-16 2xl:px-64 bg-white">
      <Swiper
        modules={[Autoplay]} 
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        breakpoints={{
          // For screens between 420px and 767px, show 2 slides
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          640: {
          slidesPerView: 1,
          spaceBetween: 16,
          },
            
          // for small desktops
          768: {
          slidesPerView: 3,
          spaceBetween: 16,
          },
          // for large desktops
          1024: {
          slidesPerView: 3,
          spaceBetween: 24,
          },
          }}
         className="mt-12">
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="bg-gray-100 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-center">{review.name}</h3>
                <div className="flex items-center">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.3l3.09 6.26 6.91.95-5 4.85 1.18 6.88L12 16.2l-6.18 3.26L7 14.36 2 9.51l6.91-.95L12 2.3z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-4 text-center">{review.review}</p>
            <div className="relative mb-4 flex justify-center items-center">
              <Image
                src={review.productImage}
                alt={`Product related to ${review.name}`}
                width={75}
                height={50}
                className="rounded-lg"
              />
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReviews;
