import Link from 'next/link'
import React from 'react'

const Outerwears = () => {
  return (
    <div className="w-full p-4">
      <ul className='flex flex-col gap-4'>
        <li><Link href="/t-shirts" className='px-2 py-4 hover:underline hover:text-black hover:font-semibold'>Jackets</Link></li>
        <li><Link href="/blouses" className=' px-2 py-4 hover:underline hover:text-black hover:font-semibold'>Blazers
        </Link></li>
        <li><Link href="/shirts" className='  px-2 py-4 hover:underline hover:text-black hover:font-semibold'>Coats</Link></li>
      </ul>
    </div>
  )
}

export default Outerwears