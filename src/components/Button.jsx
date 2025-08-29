import React from 'react'

const Button = ({text, px, py, size ,onClick }) => {
  return (
    <div className={`bg-[#FF7A00] rounded-[20px] md:rounded-[30px] font-bold text-[#0A1A2F] px-[6px] py-[3px] md:px-[25px] md:py-[7px] text-[8px] md:text-[14px]`} onClick={onClick} >
      <div className='flex gap-0.5 md:gap-2 items-center cursor-pointer'>
        <p>{text}</p>
        <img src='/mdi-light_arrow-up (1).png' className='w-[9px] h-[9px] md:w-[13px] md:h-[14px]' />
      </div>
    </div>
  )
}

export default Button
