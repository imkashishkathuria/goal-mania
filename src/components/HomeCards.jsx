import React from 'react'
import AddToCartBtn from './AddToCartBtn'
import Button from './Button'
import { useNavigate } from 'react-router-dom';

const HomeCards = ({image, heading, subheadingwidth, subheading, btn1, btn2, like, hr, btn3, gap, imgwidth, imgheight, subWidth, price, stars, imgsmwidth, imgsmheight }) => {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col gap-3'>
        <img src={image} className={`object-contain md:-ml-3 w-[${imgsmwidth}px] md:w-[${imgwidth}px] h-[${imgsmheight}px] md:h-[${imgheight}px]` } onClick={()=>navigate(`/product${image}`)}/>
        <h1 className='font-bold text-[14px] md:text-[22px] text-[#000000]' style={{ width: `${subheadingwidth}px`}} >{heading}</h1>
        {hr}
        <p className='text-[10px] md:text-[13px] text-[#000000]' style={{ width: `${subWidth}px`}}>{subheading}</p>
        <div className='flex items-center gap-2'>
          <p className='text-[#0A1A2F] text-[22px] font-bold'>{price}</p>
          <img src={stars} />
          
        </div>
        <div className='flex items-center'>
            {/* <AddToCartBtn />
            <Button text="Buy Now" />
            <img src='/mdi-light_heart (1).png' className='w-[30px] h-[24px]' /> */}
            {btn1}
            {btn2}
            {like}
            {btn3}
        </div>
    </div>
  )
}

export default HomeCards
