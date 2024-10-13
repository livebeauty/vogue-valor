'use client'

import { useCartStore } from '@/app/hooks/useCartStore'
import { useWixClient } from '@/app/hooks/useWixClient'
import React, { useState } from 'react'

const Add = ({
  productId,
  variantId,
  stockNumber
}:{
  productId:string,
  variantId:string,
  stockNumber:number
}) => {
  const [quantity, setQuantity] = useState(1)

  const handleQuantity = (type: "increase" | "decrease") => {
    if (type === "increase" && quantity < stockNumber) {
      setQuantity(prev => prev + 1)
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

 const wixClient = useWixClient()

 const {addItem, isLoading} =  useCartStore()
 
  return (
    <div className='flex flex-col gap-4'>
      <h4 className='font-medium'>Choose a quantity</h4>

      <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
        <div className='bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32'>
          <button className='cursor-pointer text-xl' onClick={() => handleQuantity("decrease")}>-
          </button>
          {quantity}
          <button className='cursor-pointer text-xl' onClick={() => handleQuantity("increase")}>+
          </button>
        </div>
          
          {stockNumber < 1 ? (
            <div className='text-xs'>
              Product is out of stock
            </div>
          ):(
            <div className='text-xs'>
            Only <span className='text-orange-500'>{stockNumber} items</span> {" "} left! 
            <br /> {"Don't"} miss it
          </div>
          )}
         </div>

      <button className='w-36 text-sm rounded-3xl ring-1 ring-[#f35c7a] text-[#f35c7a] py-2 px-4 hover:bg-[#f35c7a] hover:text-white disabled:cursor-not-allowed disabled:ring-0 disabled:bg-pink-200 disabled:text-white disabled:ring-none'
      disabled={isLoading}
      onClick={() => addItem(wixClient,productId,variantId,quantity)}
      >Add to Cart</button>
    </div>
  </div>
  )
}

export default Add
