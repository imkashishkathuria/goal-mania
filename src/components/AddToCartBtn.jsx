import React from 'react'

const AddToCartBtn = ({size, px, py}) => {
  return (
    <div className='border border-[#0A1A2F] rounded-[30px] text-[#0A1A2F]' style={{ paddingLeft: `${px}px`, paddingRight: `${px}px`, paddingTop: `${py}px`, paddingBottom: `${py}px`}}>
      <div className='flex gap-2 items-center cursor-pointer'>
        <p style={{ fontSize: `${size}px`}}>Add to Cart</p>
        <img src='/mdi-light_arrow-up (1).png' className='w-[13px] h-[14px]' />
      </div>
    </div>
  )
}

export default AddToCartBtn
