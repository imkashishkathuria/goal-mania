import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const HeroCard = ({heading, subheading}) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-3 w-[300px]  md:h-[270px] md:w-[680px]'>
        <h1 className='font-extrabold text-[22px] text-center md:text-left md:text-[45px] text-[#F5F5F5] md:w-[620px]'>{heading}</h1>
        <p className='text-[10px] md:text-[15px] text-left text-[#FFFFFF] w-[300px] md:w-[540px]'>{subheading}</p>
        <div className='flex gap-3 justify-center md:mr-40 mr-4'>
          <Button text="Ultime Notizie" px="24" py="8" size="15" />
          <Button text="Maglie Attuali" px="24" py="8" size="15" 
          onClick={()=>navigate("/product")}  />
          <Button text="Maglie Retro" px="24" py="8"  size="15" onClick={()=>navigate("/product")}/>
        </div>
      
    </div>
  )
}

export default HeroCard
