import React from 'react'

import CustomizeProduct from '../CustomizeProduct/CustomizeProduct'
import Add from '../Add/Add'
import Image from 'next/image'
import { media } from '@wix/sdk'

const ProductDescription = ({product,reviews}: {
  product:any
  reviews:any
}) => {
  return (
    <div>
      <h1 className='text-4xl mt-8'>{product.name}</h1>
      <p className='text-gray-500'>
        {product.description}
      </p>

      <div className='h-[2px] bg-gray-100' />
      {product.price?.price === product.price?.discountedPrice ? (
      <h2 className=' font-medium text-2xl'>
      ${product.price?.discountedPrice}
      </h2>
      ) : (
      <div className='flex items-center gap-4'>
        <h3 className='text-xl text-gray-500 line-through '>
          ${product.price?.price}
        </h3>

        <h2 className='font-medium text-2xl'>
          ${product.price?.discountedPrice}
        </h2>
      </div>
      )}
         
      

      <div className='h-[2px] bg-gray-100' />
      {product.variants && product.productOptions ? (
        <CustomizeProduct
        productID={product._id!}
        variants={product.variants}
        productOptions={product.productOptions}
        />
      ):(
        <Add 
        productId={product._id!}
        variantId="00000000-000000-000000-000000000000"
        stockNumber={product.stock?.quantity || 0}
        />
      )}
      
      <div className='h-[2px] bg-gray-100' />
        {product.additionalInfoSections?.map((section:any) => (
        <div className='text-sm' key={section.title}>
        <h4 className='font-medium mb-4'>{section.title}</h4>
        <p>{section.description}</p>
      </div>
      ))}
     <div className='h-[2px] bg-gray-100' />
     {/* REVIEWS */}
     <h1 className='text-2xl'>User Review</h1>
     {reviews.data.map((review:any) => (
      <div className='flex flex-col gap-4' key={review.id}>
       
        
        {/* User */}
       <div className='flex items-center font-medium'>
       <Image src={review.customer.avatar_url} alt='' width={32} height={32} className='rounded-full'/>
       <span>{review.customer.display_name}</span>
       </div>
       {/* Stars */}
       <div className='flex gap-2'>
        {Array.from({length:review.rating}).map((_,index) => (
          <Image src="/images/star.png" alt='' key={index} width={16} height={16}/>
        ))}
       </div>
       {/* Desc */}
        {review.heading && <p>{review.heading}</p>}
        {review.body && <p>{review.body}</p>}

       <div
        className=''>
         {review.media.map((media:any) => (
          <Image
          src={media.url}
          key={media.id}
          alt=''
          width={100}
          height={50}
          className='object-cover'
          />
         ))}

        </div>
      </div>
     ))}
    </div>
    
  )
}

export default ProductDescription
