import Link from 'next/link'
import React from 'react'

const ProfileModal = ({handleLogout,isLoading}:{handleLogout:any,isLoading:any}) => {
    const profileItem = true
  return (
    <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] top-6 right-0 mt-2 bg-white border flex flex-col gap-6 z-20'>
      {! profileItem ? (
        <div className="flex items-center justify-center text-center text-sm font-medium text-gray-600">
        Your cart is empty.
      </div>
      ) : (
        <>
           <ul>
              <li className='hover:underline hover:text-red-600'><Link href="/profile">My Account</Link></li>
              <li className='hover:underline hover:text-red-600'><Link href="/orders">Orders</Link></li>
              <li className='hover:underline hover:text-red-600'><Link href="/logout" onClick={handleLogout}>
              {isLoading ? "Logging out" : "Logout"}
              </Link></li>
            </ul>
        </>
      )
      }
    </div>
  )
}

export default ProfileModal
