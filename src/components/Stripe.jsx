import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] p-4 px-4 py-3 border-zinc-600 border-t-[1px] border-r-[1px] border-l-[1px] flex items-center justify-between'>
        <img src={val.url} alt="" />
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe