import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
const Button = ({title = "Get Started"}) => {
  return (
    <div className='w-32 px-3 py-2 bg-zinc-100 text-black flex items-center justify-between rounded-full'>
        <span className='text-sm font-medius'>{title}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button