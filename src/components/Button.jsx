import React from 'react'

const Button = ({text, px, py, size }) => {
  return (
    <div className='bg-[#FF7A00] rounded-[30px] text-[#0A1A2F]' style={{ paddingLeft: `${px}px`, paddingRight: `${px}px`, paddingTop: `${py}px`, paddingBottom: `${py}px`, fontSize: `${size}px` }}>
      <div className='flex gap-2 items-center cursor-pointer'>
        <p>{text}</p>
        <img src='/mdi-light_arrow-up (1).png' className='w-[13px] h-[14px]' />
      </div>
    </div>
  )
}

export default Button
