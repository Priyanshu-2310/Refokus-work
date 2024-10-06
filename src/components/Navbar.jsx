import React from 'react'
import logo from '../Images/logo.png'
import Button from './Button'
const Navbar = () => {
  return (
    <div className='max-w-screen-lg mx-auto bg-[#1C1C1C] py-3 flex items-center justify-between border-b-[1px] border-zinc-700'>
      <div className="nleft flex items-center">
      <img width='100px' src={logo} alt="" />
      <div className="links flex gap-14 ml-20">
        {["Home", "work", "culture", "", "News"].map((elem, index) => {
          return (
            elem.length == 0 ? (<span key={index} className='w-[2px] h-5 bg-zinc-700'></span>) : (
              <a key={index} className='text-sm capitalize' href='#'>{elem}</a>
            )
          )
        }
        )}
      </div>
      </div>
        <Button />
    </div>
  )
}

export default Navbar