import React from 'react'
import HomeSections from './HomeSections'
import HomeCards from './HomeCards'
import AddToCartBtn from './AddToCartBtn'
import Button from './Button'

const UltimiCard = () => {
  return (
    <div>
       
          <div className='flex gap-3'>
            <HomeCards image="/Frame 32.png" heading="Maglia Napoli Partenope Edizione Speciale" imgwidth="300" subheadingwidth="280" price="€30.00" stars="/Frame 35.png" btn1={
              <div className='flex gap-3 items-center mb-9'>
                <AddToCartBtn size="12" px="8" py="4" />
                <Button text="Buy Now" px="8" py="4" size="12" />
                <img src='/mdi-light_heart (1).png' className='w-[30px] h-[24px]' />
              </div>} />

            <HomeCards image="/Frame 238015.png" heading="Maglia INTER x VR46 EDIZIONE LIMITATA" imgwidth="300" subheadingwidth="280" price="€30.00" stars="/Frame 35.png" btn1={
              <div className='flex gap-3 items-center mb-9'>
                <AddToCartBtn size="12" px="8" py="4" />
                <Button text="Buy Now" px="8" py="4" size="12" />
                <img src='/mdi-light_heart (1).png' className='w-[30px] h-[24px]' />
              </div>} />

            <HomeCards image="/Frame 238016.png" heading="Maglia INTER x VR46 EDIZIONE LIMITATA" imgwidth="300" subheadingwidth="280" price="€35.00" stars="/Frame 35.png" btn1={
              <div className='flex gap-3 items-center mb-9'>
                <AddToCartBtn size="12" px="8" py="4" />
                <Button text="Buy Now" px="8" py="4" size="12" />
                <img src='/mdi-light_heart (1).png' className='w-[30px] h-[24px]' />
              </div>} />

            <HomeCards image="/Frame 238017.png" heading="Maglia INTER x VR46 EDIZIONE LIMITATA" imgwidth="300" subheadingwidth="280" price="€35.00" stars="/Frame 35.png" btn1={
              <div className='flex gap-3 items-center mb-9'>
                <AddToCartBtn size="12" px="8" py="4" />
                <Button text="Buy Now" px="8" py="4" size="12" />
                <img src='/mdi-light_heart (1).png' className='w-[30px] h-[24px]' />
              </div>} />

          </div>
        
    </div>
  )
}

export default UltimiCard
