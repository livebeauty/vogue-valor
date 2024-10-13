"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import CartModal from '../CartModal/CartModal'
import { usePathname, useRouter } from 'next/navigation'
import { useWixClient } from '@/app/hooks/useWixClient'
import Cookies from 'js-cookie'
import ProfileModal from '../../ProfileModal/ProfileModal'
import { useCartStore } from '@/app/hooks/useCartStore'

const NavIcons = () => {
  const [IsProfileOpen, setIsProfileOpen] = useState(false);
  const [IsCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter();
  const pathName = usePathname();

  const wixClient = useWixClient()
  const isLoggedIn = wixClient.auth.loggedIn()

// TEMPORARY
//  const isLoggedIn = false

 const handleProfile = () => {
   if (!isLoggedIn) {
     router.push("/login")
   }else{
     setIsProfileOpen((prev) => !prev)
   }
   setIsProfileOpen((prev) => !prev)
 }

  // AUTH WITH WIX-MANAGED AUTH
  // const wixClient = useWixClient();

  // const login = async () => {
  //   const loginRequestData =  wixClient.auth.generateOAuthData(
  //     "http://localhost:3000",
  //   );
  //   console.log(loginRequestData);

  //   localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData))
  //   const {authUrl} = await wixClient.auth.getAuthUrl(loginRequestData)
  //   window.location.href = authUrl
  // }

  //  console.log(pathName);
  
  
  const handleLogout = async() => {
    setIsLoading(true)
    Cookies.remove("refreshToken")
    const {logoutUrl} = await wixClient.auth.logout(window.location.href)
    setIsLoading(false)
    setIsProfileOpen(false)
    router.push(logoutUrl)
  }



  const {cart,counter,getCart} = useCartStore()

  useEffect(() => {
    getCart(wixClient)
  }, [wixClient,getCart])
  

  return (
    <div className='flex items-center gap-8 relative'>
      {/* Profile Icon and Dropdown */}
      <div 
         className='relative' 
        onMouseEnter={() => setIsProfileOpen(true)} 
        onMouseLeave={() => setIsProfileOpen(false)}
        >
        <Image
          src="/images/logo svg/profile.svg"
          alt='profile'
          width={45}
          height={0}
          className='cursor-pointer'
          onClick={handleProfile}
          // onClick={login}
          />
        {IsProfileOpen && (
          <ProfileModal handleLogout={handleLogout} isLoading={isLoading}/>
        )}
      </div>

      {/* Favorites Icon */}
      <div className='relative'>
        <Image
          src="/images/logo svg/Heart.svg"
          alt='favorites'
          width={45}
          height={0}
          className='cursor-pointer'
        />
      </div>

      {/* Shopping Bag Icon and Dropdown */}
      <div className='relative' 
        onMouseEnter={() => setIsCartOpen(true)} 
        onMouseLeave={() => setIsCartOpen(false)}
      >
        <Image
          src="/images/logo svg/Cart.svg"
          alt='cart'
          width={45}
          height={30}
          className='cursor-pointer'
        />
        <div className='absolute -top-4 -right-4 w-6 h-6 bg-[#f35c7a] rounded-full text-white text-sm flex items-center justify-center'>
          {counter}
        </div>
        {IsCartOpen && <CartModal/>}
      </div>
    </div>
  )
}

export default NavIcons
