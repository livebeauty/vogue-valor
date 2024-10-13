import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


// Define the props interface
interface WomenCollectionProps {
    isSaleOpen: boolean;
  }

  const WomenCollection: React.FC<WomenCollectionProps> = ({ isSaleOpen })  => {
  return (  
    <div
    className={`absolute left-0  top-[75%] mt-2 bg-white  py-8 px-8 w-[80vw] max-w-[calc(100vw-4rem)] h-[460px] transition-opacity duration-300  rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] ease-in-out ${isSaleOpen ? 'opacity-100' : 'opacity-0'} z-50`}
    style={{ visibility: isSaleOpen ? 'visible' : 'hidden' }}
  >
    <ul className="grid grid-cols-4 gap-8">
      <li className="cursor-pointer">
        <Image
          src="/images/Navbar image/Dress logo/women section/woman.png"
          alt="Women"
          width={250}
          height={100}
        />
        <Link href="/women" className="text-center flex justify-center hover:font-semibold">
          Woman
        </Link>
      </li>
      <li className="cursor-pointer flex flex-col gap-10">
       <div className='flex flex-col items-center justify-center'>
         <h4 className='font-bold'>Top</h4>
         <ul  className='mt-2'>
            <li><Link href="" className='hover:underline hover:font-semibold'>T-Shirts</Link></li>
            <li><Link href="" className='hover:underline hover:font-semibold'>Blouses</Link></li>
            <li><Link href="" className='hover:underline hover:font-semibold'>Shirts</Link></li>
            <li><Link href="" className='hover:underline hover:font-semibold'>Tunics</Link></li>
         </ul>
       </div>

       <div className='flex flex-col items-center justify-center'>
         <h4 className='font-bold'>Bottom</h4>
         <ul  className='mt-2'>
            <li><Link href="" className='hover:underline hover:font-semibold'>Jeans</Link></li>
            <li><Link href="" className='hover:underline hover:font-semibold'>Trousers</Link></li>
            <li><Link href="" className='hover:underline hover:font-semibold'>Skirts</Link></li>
            <li><Link href="" className='hover:underline hover:font-semibold'>Leggings</Link></li>
         </ul>
       </div>

      
      </li>

      <li className='cursor-pointer flex flex-col gap-10'>
      <div className='flex flex-col items-center justify-center'>
         <h4 className='font-bold'>Ethnic Wear</h4>
         <ul className='mt-2'>
            <li><Link href="" className='hover:underline hover:font-semibold'>Sarees</Link></li>
            <li><Link href="" className='hover:underline hover:font-semibold'>Kurtis</Link></li>
            <li><Link href="" className='hover:underline hover:font-semibold'>Lehenga</Link></li>
            <li><Link href="" className='hover:underline hover:font-semibold'>Salwar Suits</Link></li>
         </ul>
       </div>

       <div className='flex flex-col items-center justify-center'>
         <h4 className='font-bold'>Dresses & Jumpsuits</h4>
         <ul className='mt-2'>
           <li><Link href="" className='hover:underline hover:font-semibold'>Casual Dresses</Link></li>
           <li><Link href="" className='hover:underline hover:font-semibold'>Evening Dresses</Link></li>
           <li><Link href="" className='hover:underline hover:font-semibold'>Jumpsuits</Link></li>
         </ul>
       </div>
      </li>

      <li className="cursor-pointer flex flex-col gap-10">
       <div className='flex flex-col items-center justify-center'>
         <h4 className='font-bold'>Activewear</h4>
         <ul  className='mt-2'>
            <li><Link href="" className='hover:underline hover:font-semibold'>Sports Bras</Link></li>
            <li><Link href="" className='hover:underline hover:font-semibold'>Leggings</Link></li>
            <li><Link href="" className='hover:underline hover:font-semibold'>Jackets</Link></li>
         </ul>
       </div>


       <div className='flex flex-col items-center justify-center'>
         <h4 className='font-bold'>Outerwear</h4>
         <ul className='mt-2'>
            <li><Link href="" className='hover:underline hover:font-semibold'>Jackets</Link></li>
            <li><Link href="" className='hover:underline hover:font-semibold'>Coats</Link></li>
            <li><Link href="" className='hover:underline hover:font-semibold'>Blazers</Link></li>
         </ul>
       </div>

       
      </li>
    </ul>
  </div>
  )
}

export default WomenCollection