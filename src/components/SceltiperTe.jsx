import React from 'react'
import HomeSections from './HomeSections'
import HomeCards from './HomeCards'
import AddToCartBtn from './AddToCartBtn'
import Button from './Button'

const SceltiperTe = () => {
  return (
    <div className='px-5 md:px-0 py-7 flex justify-center'>
        <HomeSections heading="Scelti per Te" subheading="Scopri la nostra selezione di maglie, accessori e articoli ufficiali per vivere il calcio ogni giorno." gap="5" cards={
            <div className='flex px-5 md:px-20 gap-3 md:gap-5 w-[100vw] overflow-auto md:w-full md:overflow-hidden'>
                <div className='md:hidden w-[220px] h-[420px] shrink-0'>
                <HomeCards image="/Rectangle 8.png" heading="Maglia Ufficiale Inter 2024/25" subheading="Indossa i colori nerazzurri con la maglia ufficiale della nuova stagione. Tessuto traspirante e design autentico."  btn1={
                    <div className='flex gap-1 md:gap-3 items-center'>
                        <AddToCartBtn size="12" px="8" py="4" />
                        <Button text="Buy Now" px="8" py="4" size="12" />
                         <img src='/mdi-light_heart (1).png' className='w-[20px] h-[20px] md:w-[30px] md:h-[24px]' />
                    </div>
                } />
                </div>
                <div className='hidden md:block'>
                    <HomeCards image="/Rectangle 8.png" heading="Maglia Ufficiale Inter 2024/25" subheading="Indossa i colori nerazzurri con la maglia ufficiale della nuova stagione. Tessuto traspirante e design autentico."  btn1={
                    <div className='flex gap-3 items-center'>
                        <AddToCartBtn size="12" px="8" py="4" />
                        <Button text="Buy Now" px="8" py="4" size="12" />
                         <img src='/mdi-light_heart (1).png' className='w-[30px] h-[24px]' />
                    </div>
                } />
                </div>

                 <div className='md:hidden w-[220px] h-[420px] shrink-0'>
                <HomeCards image="/Rectangle 8 (1).png" heading="Maglia Retro Milan 1993/94" subheading="Rivivi la storica stagione con la maglia iconica rossonera, un must per ogni vero tifoso." btn1={
                    <div className='flex gap-3 items-center'>
                        <AddToCartBtn size="12"  px="8" py="4" />
                        <Button text="Buy Now" px="8" py="4" size="12" />
                         <img src='/mdi-light_heart (1).png' className='w-[20px] h-[20px]' />
                    </div>
                } />
                </div>
                <div className='hidden md:block'>
                    <HomeCards image="/Rectangle 8 (1).png" heading="Maglia Retro Milan 1993/94" subheading="Rivivi la storica stagione con la maglia iconica rossonera, un must per ogni vero tifoso." btn1={
                    <div className='flex gap-3 items-center'>
                        <AddToCartBtn size="12"  px="8" py="4" />
                        <Button text="Buy Now" px="8" py="4" size="12" />
                         <img src='/mdi-light_heart (1).png' className='w-[30px] h-[24px]' />
                    </div>
                } />
                </div>


                <div className='md:hidden w-[220px] shrink-0'>
                 <HomeCards image="/Rectangle 8 (2).png" heading="Pallone Serie A 2024" subheading="Il pallone ufficiale della Serie A, perfetto per collezionisti e per il gioco in campo." btn1={
                    <div className='flex gap-3 items-center'>
                        <AddToCartBtn size="12"  px="8" py="4" />
                        <Button text="Buy Now" px="8" py="4" size="12" />
                         <img src='/mdi-light_heart (1).png' className='w-[20px] h-[20px]' />
                    </div>
                } />
                </div>
                 <div className='hidden md:block'>
                    <HomeCards image="/Rectangle 8 (2).png" heading="Pallone Serie A 2024" subheading="Il pallone ufficiale della Serie A, perfetto per collezionisti e per il gioco in campo." btn1={
                    <div className='flex gap-3 items-center'>
                        <AddToCartBtn size="12"  px="8" py="4" />
                        <Button text="Buy Now" px="8" py="4" size="12" />
                         <img src='/mdi-light_heart (1).png' className='w-[30px] h-[24px]' />
                    </div>
                } />
                </div>
                  <div className='md:hidden w-[220px] shrink-0'>
                 <HomeCards image="/public/6cad815ed3ad25113b8b70f684b7b6464ec12451.jpg" heading="Maglia Ufficiale Inter 2024/25" subheading="Indossa i colori nerazzurri con la maglia ufficiale della nuova stagione. Tessuto traspirante e design autentico." btn1={
                    <div className='flex gap-3 items-center'>
                        <AddToCartBtn size="12"  px="8" py="4" />
                        <Button text="Buy Now" px="8" py="4" size="12" />
                         <img src='/mdi-light_heart (1).png' className='w-[20px] h-[20px]' />
                    </div>
                } />
                </div>
                 <div className='hidden md:block'>
                    <HomeCards image="/public/6cad815ed3ad25113b8b70f684b7b6464ec12451.jpg" heading="Maglia Ufficiale Inter 2024/25" subheading="Indossa i colori nerazzurri con la maglia ufficiale della nuova stagione. Tessuto traspirante e design autentico." btn1={
                    <div className='flex gap-3 items-center'>
                        <AddToCartBtn size="12"  px="8" py="4" />
                        <Button text="Buy Now" px="8" py="4" size="12" />
                         <img src='/mdi-light_heart (1).png' className='w-[30px] h-[24px]' />
                    </div>
                } />
                </div>

            </div>
        } />
      
    </div>
  )
}

export default SceltiperTe
