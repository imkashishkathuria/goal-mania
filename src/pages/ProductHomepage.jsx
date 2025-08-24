import React, { useState } from 'react'
import Header from '../components/Header'
import HeroCard from '../components/HeroCard'
import HomeSections from '../components/HomeSections'
import HomeCards from '../components/HomeCards'
import AddToCartBtn from '../components/AddToCartBtn'
import Button from '../components/Button'
import UltimiCard from '../components/UltimiCard'
import BuyCard from '../components/BuyCard'
import ReviewCard from '../components/ReviewCard'
import Footer from '../components/Footer'
import ProductService from '../components/ProductService'
import Piùvenduti from '../components/Piùvenduti'
import FAQs from '../components/FAQs'

const ProductHomepage = () => {

  return (
    <div>
      <Header />
      <div className='flex my-4 md:my-10 px-4 md:px-15 py-2 mx-2 md:mx-30 justify-between items-center bg-[#F0F0F0] rounded-[30px] md:rounded-[40px] '>


        <div className='flex gap-3 items-center'>
          <img src='/Frame.png' className='w-[18px] h-[18px]' />
          <input placeholder='Search for products' type='text' className='border-none outline-none' />
        </div>


        <div className='hidden md:flex items-center gap-2 border border-[#0A1A2F] px-4 py-2 rounded-[20px]'>
          <p className='text-[#0A1A2F] text-[14px] font-bold'>Search</p>
          <img src='/mdi-light_arrow-up (1).png' className='w-[11px] h-[11px]' />

        </div>
      </div>


      <div className='relative '>
        <div className="hidden md:block relative">

          {/* <img src='/IMG_6873 3.png' className='hidden md:block inset-0 w-full mask-gradient-left object-contain' />
         <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-l from-transparent to-white" />
         
         <div className="relative ">
            <img
              src="/Rectangle 2 (2).png"
              className="w-full block mask-gradient-left"
            />
          </div> */}

          <div className="relative h-[80vh]">
            {/* First Image (background) */}
            <img
              src="/Rectangle 2 (1).png"
              className="w-full h-full object-contain"
            />

            {/* Second Image (overlapping from right) */}
            <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
              <img
                src="/IMG_6873 3.png"
                className="object-contain w-full h-full "
                style={{
                  maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 90%)',
                  WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 90%)'
                  // maskRepeat: 'no-repeat',
                  // WebkitMaskRepeat: 'no-repeat',
                  // maskSize: 'cover',
                  // WebkitMaskSize: 'cover',
                }}
              />
            </div>
          </div>


        </div>

        <div className="md:hidden relative w-full">
          <div className="relative">
            <img
              src="/IMG_6873 3.png"
              className="w-full block mask-gradient-bottom"
            />
            <div className="absolute inset-x-0 bottom-0 h-50 bg-gradient-to-b from-transparent to-white" />
          </div>
          <div className="relative -mt-105 ">
            <img
              src="/Rectangle 2 (2).png"
              className="w-full block mask-gradient-top-bottom"
            />
          </div>
        </div>

        <div className='absolute inset-0 translate-y-1/2 mt-10 ml-3 mr-3 md:mr-0 md:translate-y-20 md:ml-17'>
          <HeroCard heading="Trova la Maglia che Rispecchia il Tuo Tifo" subheading="Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style." />
        </div>


      </div>
      <div className='flex justify-between mt-1 bg-[#F5F5F5] md:bg-[#0A1A2F] px-5 md:px-20 py-3 items-center'>
        <div className='flex flex-col md:border-r  md:border-[#F5F5F5] md:pr-15' >
          <div className='flex gap-2  '>
            <p className='text-[20px] md:text-[30px] text-[#0A1A2F] md:text-[#F5F5F5]'>1,200+</p>
            <p className='text-[11px] md:text-[16px] text-[#0A1A2F] md:text-[#F5F5F5] pt-4'>
              Clienti Felici
            </p>
          </div>
          <p className='text-[8px] md:text-[15px] text-[#0A1A2F] md:text-[#FFFFFF]'>
            La nostra più grande soddisfazione.
          </p>
        </div>

        <div className='flex flex-col md:border-r  md:border-[#F5F5F5] md:pr-15 ' >
          <div className='flex gap-2'>
            <p className='text-[20px] md:text-[30px] text-[#0A1A2F] md:text-[#F5F5F5]'>1,200+</p>
            <p className='text-[11px] md:text-[16px] text-[#0A1A2F] md:text-[#F5F5F5] pt-4'>
              Scelte
            </p>
          </div>
          <p className='text-[8px] md:text-[15px] text-[#0A1A2F] md:text-[#FFFFFF]'>
            Ogni acquisto conta.
          </p>
        </div>

        <div className='hidden md:flex flex-col border-r border-[#F5F5F5] pr-15' >
          <div className='flex gap-2  '>
            <p className='text-[30px] text-[#F5F5F5]'>1,200+</p>
            <p className='text-[16px] text-[#F5F5F5] pt-4'>
              Esperienze
            </p>
          </div>
          <p className='text-[15px] text-[#FFFFFF]'>
            Positive e memorabili.
          </p>
        </div>

      </div>

      <div className='py-4 md:py-8 flex justify-center items-center'>
        <HomeSections heading="Ultimi prodotti" subheading="Comfort e stile in un solo capo." gap="7" cards={
          <div className='flex w-[100vw] md:w-full overflow-auto md:overflow-hidden gap-2 md:gap-6 px-5 md:px-10'>

            <div className='md:hidden w-[100px] shrink-0'>
              <UltimiCard />
            </div>
            <div className='hidden md:block'>
              <UltimiCard />
            </div>
          </div>


        } />
      </div>


      <div className='py-4 md:py-8 flex justify-center items-center'>

        <Piùvenduti />



      </div>
      <div className='flex flex-col gap-4 px-6 md:px-7 md:py-12 justify-center items-center'>
        <div className='flex w-[100vw] px-10 md:px-20  md:w-full overflow-auto md:overflow-hidden gap-3 md:gap-6'>
          <img src='/Frame 238038.png' className='md:w-[550px] md:h-[300px] object-contain' />
          <img src='/Frame 238039.png' className='md:w-[550px] md:h-[300px] object-contain' />
        </div>
        <div className='hidden md:flex gap-6'>
          <img src='/Frame 238038 (1).png' className='w-[550px] h-[300px] object-contain' />
          <img src='/Frame 238039 (1).png' className='w-[550px] h-[300px] object-contain' />
        </div>
      </div>

      <div className='flex flex-col gap-3 md:gap-5 py-9 md:py-12 px-6 md:px-25'>
        <div className='flex md:justify-between items-center'>
          <h1 className='text-[24px] text-center md:text-[35px] font-extrabold text-[#000000]'>I nostri clienti felici</h1>
          <div className='hidden md:flex gap-2'>
            <img src='/arrow-down-bold 2.png' className='w-[17px] h-[17px]' />
            <img src='/arrow-down-bold 1.png' className='w-[17px] h-[17px]' />
          </div>
        </div>
        <div className='flex gap-3 overflow-hidden'>
          <ReviewCard name="Sarah M." review="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”" />
          <ReviewCard name="Alex K." review="Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”" />
          <ReviewCard name="James L." review="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”" />
          <ReviewCard name="James L." review="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”" />
        </div>
      </div>

      <ProductService bgColor="#F0F0F0" textcolor="#000000C9" img1="Vector (5)" img2="Vector (6)" img3="Vector (7)" img4="Frame (1)" />
      <FAQs />
      <Footer />

    </div>
  )
}

export default ProductHomepage
