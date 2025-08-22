import React from 'react'
import Button from './Button'

const HeroCard = ({heading, subheading}) => {
  return (
    <div className='flex flex-col gap-3 h-[270px] w-[680px]'>
        <h1 className='font-bold text-[45px] text-[#F5F5F5] w-[620px]'>{heading}</h1>
        <p className='text-[18px] text-[#FFFFFF] w-[540px]'>{subheading}</p>
        <div className='flex gap-3'>
          <Button text="Ultime Notizie" px="24" py="8" size="15" />
          <Button text="Maglie Attuali" px="24" py="8" size="15" />
          <Button text="Maglie Retro" px="24" py="8"  size="15"/>
        </div>
      
    </div>
  )
}

export default HeroCard
