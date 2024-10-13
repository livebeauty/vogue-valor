// 'use client'
import React, { Suspense } from 'react'
import HeroPage from './components/Hero/page'
import BestSellerList from './components/BestSeller/BestSellerList'
import CategoryProduct from './components/Categories/page'
import TrendingSeason from './components/Trending/Trending'
import NewArrival from './components/NewArrival/NewArrival'
import CustomerReviews from './components/CustomerReviews/CustomerReviews'
import Skeletons from './components/Skeleton/Skeleton'
import { wixClientServer } from './lib/WixClientServer'


const HomePage = async() => {
  // const wixClient = await wixClientServer();
 
  // const res =await wixClient.products
  // .queryProducts()
  // .find()
  // console.log(res);

  return (
    <>
      <div>
        <HeroPage />
        <div className='mt-24 bg-green-300 px-4 py-12 md:px-8 lg:px-16 xl:32 2xl:px-64'>
          <h1 className='text-2xl'>Bestseller Collection</h1>
          <Suspense fallback={<Skeletons/>}>
          <BestSellerList 
            categoryId={process.env.BESTSELLER_PRODUCT_CATEGORY_ID!}
             limit={6}
            />
          </Suspense>
        </div>

        <div className='mt-24 bg-pink-300 px-4 py-4 md:px-8 lg:px-16 xl:32 2xl:px-64'>
          <h1 className='text-2xl'>Trending</h1>
          <TrendingSeason />
        </div>

        <div className='mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64'>
          <h1 className='text-2xl'>Categories </h1>
          <Suspense fallback={<Skeletons/>}>
          <CategoryProduct />
          </Suspense>
        </div>

        <div className='mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64'>
          <h1 className='text-2xl'>New Arrival </h1>
          <NewArrival />
        </div>

        
        <div className='mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64'>
          <h1 className='text-3xl font-bold mb-8 text-center'>Customer review </h1>
          <CustomerReviews/>
        </div>


    
      </div>
    </>
  )
}

export default HomePage
