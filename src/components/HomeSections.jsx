import React from 'react'

const HomeSections = ({ heading, subheading, cards, gap }) => {
  return (
    <div className={`flex flex-col gap-${gap} justify-center items-center`}>
        <h1 className='text-[#0A1A2F] text-[45px]'>{heading}</h1>
        <p className='text-[17px] text-[#333333] text-center w-[940px]'>{subheading}</p>
        <div>{cards}</div>
        <div className='flex gap-7'>
            <img src='/Frame 237997.png' className='w-[40px] h-[40px] cursor-pointer' />
            <img src='/Frame 237998.png' className='w-[40px] h-[40px] cursor-pointer' />
        </div>
    </div>
  )
}

export default HomeSections
