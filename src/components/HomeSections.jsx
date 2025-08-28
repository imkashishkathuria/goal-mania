import React, { useRef } from 'react'

const HomeSections = ({ heading, subheading, cards, gap, headingcolor }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if(direction === "left"){
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth"});
    }else{
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth"});
    }
  }
  return (
    <div className={`flex flex-col gap-3 md:gap-${gap} justify-center items-center`}>
        <h1 className={`text-[${headingcolor}] text-center font-semibold md:font-normal md:text-left text-[25px] md:text-[45px]`}>{heading}</h1>
        <p className='text-[10px] md:text-[17px] text-[#333333] w-[300px] text-center md:w-[940px]'>{subheading}</p>
        <div ref={scrollRef}  className=" flex gap-3 md:gap-5 overflow-x-auto md:overflow-hidden w-full scroll-smooth md:pl-16 ">{cards}</div>
        <div className='hidden md:flex gap-7'>
            <img src='/Frame 237997.png' className='w-[40px] h-[40px] cursor-pointer' onClick={() => scroll("left")}/>
            <img src='/Frame 237998.png' className='w-[40px] h-[40px] cursor-pointer' onClick={() => scroll("right")} />
        </div>
    </div>
  )
}

export default HomeSections
