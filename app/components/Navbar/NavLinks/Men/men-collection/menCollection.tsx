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
    className={`absolute left-[1%]  top-[75%] mt-2 bg-white  py-8 px-8 w-[80vw] max-w-[calc(100vw-4rem)] h-[460px] transition-opacity duration-300  rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] ease-in-out ${isSaleOpen ? 'opacity-100' : 'opacity-0'} z-50`}
    style={{ visibility: isSaleOpen ? 'visible' : 'hidden' }}
  >
    <ul className="grid grid-cols-3 gap-8">
      <li className="cursor-pointer">
        <Image
          src="/images/Navbar image/Dress logo/men section/men.png"
          alt="Women"
          width={250}
          height={100}
        />
        <Link href="/women" className="text-center flex justify-center hover:font-semibold">
          Man
        </Link>
      </li>
      <li className="cursor-pointer flex flex-col gap-10">
       <div className='flex flex-col items-center justify-center'>
         <h4 className='font-bold'>Top</h4>
         <ul  className='mt-2'>
            <li><Link href="" className='hover:underline hover:font-semibold'>T-Shirts</Link></li>
            <li><Link href="" className='hover:underline hover:font-semibold'>Shirts</Link></li>
            <li><Link href="" className='hover:underline hover:font-semibold'>Polo</Link></li>
            <li><Link href="" className='hover:underline hover:font-semibold'>Hoodies</Link></li>
         </ul>
       </div>

       <div className='flex flex-col items-center justify-center'>
         <h4 className='font-bold'>Bottom</h4>
         <ul  className='mt-2'>
            <li><Link href="" className='hover:underline hover:font-semibold'>Jeans</Link></li>
            <li><Link href="" className='hover:underline hover:font-semibold'>Trousers</Link></li>
            <li><Link href="" className='hover:underline hover:font-semibold'>Shorts</Link></li>
         </ul>
       </div>

      
      </li>

      <li className='cursor-pointer flex flex-col gap-10'>
      <div className='flex flex-col items-center justify-center'>
         <h4 className='font-bold'>Outerwear</h4>
         <ul className='mt-2'>
            <li><Link href="" className='hover:underline hover:font-semibold'>Jackets</Link></li>
            <li><Link href="" className='hover:underline hover:font-semibold'>Blazers</Link></li>
            <li><Link href="" className='hover:underline hover:font-semibold'>Coats</Link></li>
         </ul>
       </div>

       <div className='flex flex-col items-center justify-center'>
         <h4 className='font-bold'>Activewear</h4>
         <ul className='mt-2'>
           <li><Link href="" className='hover:underline hover:font-semibold'>Track Pants</Link></li>
           <li><Link href="" className='hover:underline hover:font-semibold'>Sweatshirts</Link></li>
         </ul>
       </div>
      </li>

    </ul>
  </div>
  )
}

export default WomenCollection