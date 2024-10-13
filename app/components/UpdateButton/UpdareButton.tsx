"use client"


import { useFormStatus } from 'react-dom'

const UpdateButton = () => {
    const {pending} = useFormStatus()
  return (
    <button 
    disabled={pending}
    className='bg-[#f35c7a] text-white p-2 rounded-md cursor-pointer text-center disabled:bg-pink-200 disabled:cursor-not-allowed max-w-96'>
      {pending ?  "Updating..." : "Update"}
    </button>
  )
}

export default UpdateButton
