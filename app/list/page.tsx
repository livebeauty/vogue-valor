import Image from 'next/image'
import React, { Suspense } from 'react'
import Filter from '../components/Filter/Filter'
import ProductList from '../components/ProductList/ProductList'
import { wixClientServer } from '../lib/WixClientServer'
import Skeletons from '../components/Skeleton/Skeleton'

const ListPage = async ({searchParams}: {searchParams:any}) => {



  
  const wixClient = await wixClientServer();

  const cat = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products");


  // console.log(cat);
    
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
      {/*------- CAMPAIGN -------*/}
      <div className='hidden bg-gray-100 px-4 sm:flex justify-between h-64'>
        {/*------- CAMPAIGN HEADER -------*/}
        <div className='w-2/3 flex flex-col items-center justify-center gap-8'>
        <h1 className='text-4xl font-semibold leading-[48px] text-gray-700'>Grab 50% off on 
          <br/>selected Product
        </h1>
        <button className='rounded-3xl bg-[#f35c7a] text-white w-max py-3 px-5 text-sm'>Buy Now</button>
        </div>
        <div className='relative w-1/3'>
        <Image src="/images/adv image/a1.png" alt='' fill className='object-contain'/>
        </div>
      </div>
      {/* ----Filter---- */}
      <Filter/>

      {/* ----Product---- */}
      <h1 className='mt-12 text-xl font-semibold'>{cat?.collection?.name} for you</h1>
      <Suspense fallback={<Skeletons/>}>
      <ProductList 
      categoryId={
      cat.collection?._id || "00000000-000000-000000-000000000001"
      }
       searchParams={searchParams}
      />
      </Suspense>
    </div>
  )
}

export default ListPage