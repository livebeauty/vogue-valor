import React from 'react'
import ProductImage from '../components/ProductImage/ProductImage';
import ProductDescription from '../components/ProductDescription/ProductDescription';
import { wixClientServer } from '../lib/WixClientServer';
import { products } from '@wix/stores';
import { notFound } from 'next/navigation';

const SinglePage = async ({params} : {params: {slug : string}}) => {

  const wixClient = await wixClientServer();

  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();


    if (!products.items[0]) {
      return notFound()
    }

    const product =  products.items[0]

    const reviewRes = await fetch(`https://api.fera.ai/v3/public/reviews?product.id=${product._id}&public_key=${process.env.NEXT_PUBLIC_FERA_ID}`)
   
    const reviews = await reviewRes.json();

    console.log(reviews);
    
  return (
    <div className='flex flex-col lg:flex-row px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 gap-16 relative'>
      {/* --IMG-- */}
    <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
     <ProductImage item={product.media?.items}/>
    </div>
      {/* --Text-- */}
    <div className='w-full lg:w-1/2 flex flex-col gap-6'>
       <ProductDescription product={product} reviews={reviews}/>
    </div>
    </div>
  )
}

export default SinglePage;