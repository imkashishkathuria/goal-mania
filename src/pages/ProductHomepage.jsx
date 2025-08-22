import React from 'react'
import Header from '../components/Header'
import HeroCard from '../components/HeroCard'
import HomeSections from '../components/HomeSections'
import HomeCards from '../components/HomeCards'
import AddToCartBtn from '../components/AddToCartBtn'
import Button from '../components/Button'
import UltimiCard from '../components/UltimiCard'
import BuyCard from '../components/BuyCard'
import ReviewCard from '../components/ReviewCard'

const ProductHomepage = () => {
  return (
    <div>
      <Header />
      <div className='flex my-10 px-15 py-5 mx-30 justify-between items-center bg-[#F0F0F0] rounded-[40px] '>
        <div className='flex gap-3 items-center'>
          <img src='/Frame.png' className='w-[18px] h-[18px]' />
          <input placeholder='Search for products' type='text' className='border-none outline-none' />
        </div>
        <div className='flex items-center gap-2 border border-[#0A1A2F] px-4 py-2 rounded-[20px]'>
          <p className='text-[#0A1A2F] text-[14px] font-bold'>Search</p>
          <img src='/mdi-light_arrow-up (1).png' className='w-[11px] h-[11px]' />

        </div>
      </div>
      <div className='relative'>
        <img src='/Rectangle 2 (1).png' className=' inset-0 w-full object-contain' />
        <div className='absolute inset-0 translate-y-20 ml-17'>
          <HeroCard heading="Trova la Maglia che Rispecchia il Tuo Tifo" subheading="Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style." />
        </div>


      </div>
      <div className='flex justify-between mt-1 bg-[#0A1A2F] px-20 py-3 items-center'>
        <div className='flex flex-col border-r border-[#F5F5F5] pr-15' >
          <div className='flex gap-2  '>
            <p className='text-[30px] text-[#F5F5F5]'>1,200+</p>
            <p className='text-[16px] text-[#F5F5F5] pt-4'>
              Clienti Felici
            </p>
          </div>
          <p className='text-[15px] text-[#FFFFFF]'>
            La nostra più grande soddisfazione.
          </p>
        </div>

        <div className='flex flex-col border-r border-[#F5F5F5] pr-15' >
          <div className='flex gap-2 '>
            <p className='text-[30px] text-[#F5F5F5]'>1,200+</p>
            <p className='text-[16px] text-[#F5F5F5] pt-4'>
              Scelte
            </p>
          </div>
          <p className='text-[15px] text-[#FFFFFF]'>
            Ogni acquisto conta.
          </p>
        </div>

        <div className='flex flex-col border-r border-[#F5F5F5] pr-15' >
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
      <div className='py-8 flex justify-center items-center'>
        <HomeSections heading="Ultimi prodotti" subheading="Comfort e stile in un solo capo." gap="7" cards={
            <UltimiCard />

        } />
      </div>
      <div className='py-8 flex justify-center items-center'>
        <HomeSections heading="Più venduti" subheading="Il capo che unisce la comodità di un fit impeccabile alla raffinatezza di un design curato nei dettagli." gap="7" cards={
            <UltimiCard />

        } />
      </div>
      <div className='flex flex-col gap-4 px-7 py-12 justify-center items-center'>
        <div className='flex gap-6'>
          <img src='/Frame 238038.png' className='w-[550px] h-[300px] object-contain'/>
          <img src='/Frame 238039.png' className='w-[550px] h-[300px] object-contain' />
        </div>
        <div className='flex gap-6'>
          <img src='/Frame 238038 (1).png' className='w-[550px] h-[300px] object-contain' />
          <img src='/Frame 238039 (1).png' className='w-[550px] h-[300px] object-contain' />
        </div>
      </div>

      <div className='flex flex-col gap-5 py-12 px-25'>
        <div className='flex justify-between items-center'>
          <h1 className='text-[35px] font-extrabold text-[#000000]'>I nostri clienti felici</h1>
          <div className='flex gap-2'>
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

      <div className='bg-[#F0F0F0] px-20 py-5 flex justify-between' >
        <div className='flex gap-3 items-center'>
          <img src='/Vector (5).png' className='w-[20px] h-[25px] object-contain' />
          <div className='flex flex-col gap-2'>
            <p className='text-[15px] text-[#000000C9]'>1 Years</p>
            <p className='text-[13px] text-[#00000099]'>Warranty</p>
          </div>
        </div>

        <div className='flex gap-3 items-center'>
          <img src='/Vector (6).png' className='w-[20px] h-[25px] object-contain' />
          <div className='flex flex-col gap-2'>
            <p className='text-[15px] text-[#000000C9]'>Free Express</p>
            <p className='text-[13px] text-[#00000099]'>Delivery</p>
          </div>
        </div>

        <div className='flex gap-3 items-center'>
          <img src='/Vector (7).png' className='w-[20px] h-[25px] object-contain' />
          <div className='flex flex-col gap-2'>
            <p className='text-[15px] text-[#000000C9]'>7-Day</p>
            <p className='text-[13px] text-[#00000099]'>Replacement</p>
          </div>
        </div>

        <div className='flex gap-3 items-center'>
          <img src='/Frame (1).png' className='w-[20px] h-[25px] object-contain' />
          <div className='flex flex-col gap-2'>
            <p className='text-[15px] text-[#000000C9]'>100% Secure</p>
            <p className='text-[13px] text-[#00000099]'>Payments</p>
          </div>
        </div>

      </div>
      <div className='bg-[#0A1A2F] py-4 flex justify-center'>
        <h1 className='text-[30px] text-[#FFEFE5] font-bold'>
          Domande frequenti
        </h1>
      </div>


    </div>
  )
}

export default ProductHomepage
