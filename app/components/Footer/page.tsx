import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const FooterPage = () => {
  return (
    <div className='py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24'>
      {/* -------TOP---------- */}
    <div className="flex flex-col md:flex-row justify-between gap-24">
      {/* -------LEFT--------- */}
      <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
      <Link href="/">
        <Image
        src="/images/logo svg/logo.svg"
        alt="Logo"
        width={85}
        height={20}
        />
      </Link>
      
      <p>4th Block, 3 414, 17th Main, 100 Feet Ring Rd, Bengaluru, Karnataka 560034</p>
      <span className='font-semibold'>voguevalor@gmail.com</span>
      <span className='font-semibold'>+1 234 567 890</span>

        <div className='flex gap-6'>
         <FaFacebookF className='w-5 h-5'/>
         <FaInstagram className='w-5 h-5'/>
         <FaYoutube className='w-5 h-5'/>
         <FaPinterest className='w-5 h-5'/>
         <FaTwitter  className='w-5 h-5'/>
        </div>
      </div>
       {/*  -------CENTER------- */}
      <div className='hidden lg:flex justify-between w-1/2'>
        <div className='flex flex-col gap-6'>
         <h1 className='font-medium text-lg'>COMPANY</h1>
         <div className='flex flex-col gap-6'>
          <Link href="">About Us</Link>
          <Link href="">Carrers</Link>
          <Link href="">Affiliates</Link>
          <Link href="">Blog</Link>
          <Link href="">Contact Us</Link>
         </div>
        </div>

        {/* -------------------------------------- */}
        <div className='flex flex-col gap-6'>
         <h1 className='font-medium text-lg'>SHOP</h1>
         <div className='flex flex-col gap-6'>
          <Link href="">New Arrival</Link>
          <Link href="">Trending</Link>
          <Link href="">Woman</Link>
          <Link href="">Man</Link>
          <Link href="">All Product</Link>
         </div>
        </div>
      {/* ---------------------------------------- */}
      <div className='flex flex-col gap-6'>
         <h1 className='font-medium text-lg'>HELP</h1>
         <div className='flex flex-col gap-6'>
          <Link href="">Customer Service</Link>
          <Link href="">My Account</Link>
          <Link href="">Legal & Privacy</Link>
          <Link href="">Gift Card</Link>
         </div>
        </div>
        {/*-----------------------------------------  */}
      </div>
      {/*  -------RIGHT------- */}
      <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
        <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
        <p>Be the first to get the latest news about trends, promotion, and more!</p>
        <div className='flex'>
         <input type="text" 
         placeholder='Email address'
         className='p-4 w-3/4'
         />
         <button className='w-1/4 bg-[#f35c7a]'>JOIN</button>
         </div>

         <span className='font-semibold'>Secure Payment</span>
         <div className='flex justify-between'>
           <Image src="/images/Footer image/masterrr.png" alt='' height={10} width={40}/>
           <Image src="/images/Footer image/Discover.png" alt='' height={40} width={40}/>
           <Image src="/images/Footer image/Rupay.png" alt='' height={40} width={40}/>
           <Image src="/images/Footer image/Visa.png" alt='' height={40} width={40}/>
           <Image src="/images/Footer image/cash-on-delivery.png" alt='' height={10} width={40}/>
        </div>
       </div>
      </div>
      {/*  -------BOTTOM------- */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-8 mt-16'>
      <div className='text-base flex items-center justify-center'>
        <span className='text-black font-semibold text-lg'>©</span>
         2024 Vogue Valor</div>
      </div>
    </div>
  )
}

export default FooterPage