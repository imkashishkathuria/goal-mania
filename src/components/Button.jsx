import React from 'react'

const Button = ({text, px, py, size }) => {
  return (
    <div className={`bg-[#FF7A00] rounded-[30px] font-bold text-[#0A1A2F] px-[6px] py-[3px] md:px-[25px] md:py-[7px] text-[10px] md:text-[14px]`} >
      <div className='flex gap-2 items-center cursor-pointer'>
        <p>{text}</p>
        <img src='/mdi-light_arrow-up (1).png' className='w-[10px] h-[10px] md:w-[13px] md:h-[14px]' />
      </div>
    </div>
  )
}

export default Button
