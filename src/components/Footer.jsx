import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-20 flex gap-32'>
            <div className="basis-1/2">
                <h1 className='text-[10rem] font-semibold leading-none '>Refokus.</h1>
            </div>
            <div className="basis-1/2 flex gap-4">
            <div className='basis-1/3 '>
                <h4 className='mb-7 text-lg text-zinc-600 capitalize'>Socials</h4>
                {["instagram","twitter", "linkedln"].map((items,index)=> <a key={index} className='block mt-2 capitalize text-zinc-600'>{items}</a>)}
            </div>
            <div className='basis-1/3 '>
                <h4 className='mb-7 text-lg text-zinc-600 capitalize'>Socials</h4>
                {["instagram","twitter", "linkedln"].map((items,index)=> <a key={index} className='block mt-2 capitalize text-zinc-600'>{items}</a>)}
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer