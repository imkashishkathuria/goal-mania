import React from 'react'
import AddToCartBtn from './AddToCartBtn'
import Button from './Button'
import { useNavigate } from 'react-router-dom';

const HomeCards = ({image, heading, subheadingwidth, subheading, btn1, btn2, like, hr, btn3, gap, imgwidth, imgheight, subWidth, price, stars, imgsmwidth, imgsmheight }) => {

  const navigate = useNavigate();

  return (
    <div className=''>
      <div className='flex flex-col justify-between  gap-3'>
        <div className='flex flex-col gap-3'>
        <img src={image} className="object-contain w-full md:-ml-3" onClick={()=>navigate(`/product${image}`)}/>
        <h1 className='font-bold text-[14px] md:text-[22px] text-[#000000]' style={{ width: `${subheadingwidth}px`}} >{heading}</h1>
        {hr}
        <p className='text-[10px] md:text-[13px] text-[#000000]' style={{ width: `${subWidth}px`}}>{subheading}</p>
        <div className='flex items-center gap-2'>
          <p className='text-[#0A1A2F] text-[22px] font-bold'>{price}</p>
          <img src={stars} />
          
        </div>
        </div>
        <div className='flex items-center'>
           
            {btn1}
            {btn2}
            {like}
            {btn3}
        </div>
        </div>
    </div>
  )
}

export default HomeCards
