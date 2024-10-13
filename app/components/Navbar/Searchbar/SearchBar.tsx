'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const SearchBar = () => {

const router = useRouter()

const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

 const formData = new FormData(e.currentTarget);
 const name = formData.get("search") as string;
 
 if (name) {
  router.push(`/list?name=${name}`)
 }}
  return (

    <form className='relative text-gray-600 w-full max-w-[400px'
     onSubmit={handleSearch} >
    <div className="flex items-center relative text-center">
    <Image 
    src= "/images/logo svg/Search.svg" 
    alt="search" 
    width={20} 
    height={20} 
    className="absolute left-3 "/>

    <input
    type="search"
    name="search"
    placeholder="Search For Saree..."
    className="bg-gray-100 w-[400px] h-10 pt-3 pr-3 pb-3 pl-10  rounded-full text-sm focus:outline-none"
    />
    </div>
    </form>

  )
}

export default SearchBar