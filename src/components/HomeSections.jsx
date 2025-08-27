import React from 'react'

const HomeSections = ({ heading, subheading, cards, gap, headingcolor }) => {
  return (
    <div className={`flex flex-col gap-3 md:gap-${gap} justify-center items-center`}>
        <h1 className={`text-[${headingcolor}] text-center font-semibold md:font-normal md:text-left text-[25px] md:text-[45px]`}>{heading}</h1>
        <p className='text-[10px] md:text-[17px] text-[#333333] w-[300px] text-center md:w-[940px]'>{subheading}</p>
        <div>{cards}</div>
        <div className='hidden md:flex gap-7'>
            <img src='/Frame 237997.png' className='w-[40px] h-[40px] cursor-pointer' />
            <img src='/Frame 237998.png' className='w-[40px] h-[40px] cursor-pointer' />
        </div>
    </div>
  )
}

export default HomeSections
