import React from 'react'

const AddToCartBtn = ({size, px, py}) => {
  return (
    <div className={`border border-[#0A1A2F] rounded-[20px] md:rounded-[30px] text-[#0A1A2F] px-[4px] py-[1px] md:px-[15px] md:py-[7px] text-[7px] md:text-[12px]`}>
      <div className='flex gap-2 items-center cursor-pointer'>
        <p className={`text-[8px] md:text-[14px]`}>Add to Cart</p>
        <img src='/mdi-light_arrow-up (1).png' className='w-[10px] h-[10px] md:w-[13px] md:h-[14px]' />
      </div>
    </div>
  )
}

export default AddToCartBtn
