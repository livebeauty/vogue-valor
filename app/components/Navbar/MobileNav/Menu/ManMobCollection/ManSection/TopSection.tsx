import Link from 'next/link'
import React from 'react'

const TopMenSections = () => {
  return (
    <div className="w-full p-4">
      <ul className='flex flex-col gap-4'>
        <li><Link href="/t-shirts" className='px-2 py-4 hover:underline hover:text-black hover:font-semibold'>T-Shirts</Link></li>
        <li><Link href="/blouses" className=' px-2 py-4 hover:underline hover:text-black hover:font-semibold'>Shirts</Link></li>
        <li><Link href="/shirts" className='  px-2 py-4 hover:underline hover:text-black hover:font-semibold'>Polo</Link></li>
        <li><Link href="/tunics" className='  px-2 py-4 hover:underline hover:text-black hover:font-semibold'>Hoodies</Link></li>
      </ul>
    </div>
  )
}

export default TopMenSections
