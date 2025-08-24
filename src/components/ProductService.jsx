import React from 'react'

const ProductService = ({bgColor, textcolor, img1, img2, img3, img4}) => {
  return (
    <div>
      <div className='px-6 md:px-20 py-5 flex flex-col gap-4 md:flex-row md:justify-between border-1 border-[' style={{ backgroundColor: `${bgColor}`, color: `${textcolor}`}} >
        <div className='hidden md:flex gap-3 items-center'>
          <img src={`/${img1}.png`} className='w-[20px] h-[25px] object-contain text-amber-200' />
          <div className='flex flex-col gap-2'>
            <p className='text-[15px]'>1 Years</p>
            <p className='text-[13px]'>Warranty</p>
          </div>
        </div>
        <div className='hidden md:flex gap-3 items-center'>
          <img src={`/${img2}.png`}  className='w-[20px] h-[25px] object-contain' />
          <div className='flex flex-col gap-2'>
            <p className='text-[15px] '>Free Express</p>
            <p className='text-[13px] '>Delivery</p>
          </div>
        </div>
        <div className='hidden md:flex gap-3 items-center'>
          <img src={`/${img3}.png`}  className='w-[20px] h-[25px] object-contain' />
          <div className='flex flex-col gap-2'>
            <p className='text-[15px]'>7-Day</p>
            <p className='text-[13px]'>Replacement</p>
          </div>
        </div>
        <div className='hidden md:flex gap-3 items-center'>
          <img src={`/${img4}.png`}  className='w-[20px] h-[25px] object-contain' />
          <div className='flex flex-col gap-2'>
            <p className='text-[15px] '>100% Secure</p>
            <p className='text-[13px]'>Payments</p>
          </div>
        </div>
        
        <div className='md:hidden flex justify-between items-center '>
        <div className='flex gap-1 items-center'>
          <img src={`/${img1}.png`} className='w-[20px] h-[25px] object-contain text-amber-200' />
          <div className='flex flex-col'>
            <p className='text-[15px]'>1 Years</p>
            <p className='text-[13px]'>Warranty</p>
          </div>
        </div>

        <div className='flex gap-1 items-center'>
          <img src={`/${img2}.png`}  className='w-[20px] h-[25px] object-contain' />
          <div className='flex flex-col'>
            <p className='text-[15px] '>Free Express</p>
            <p className='text-[13px] '>Delivery</p>
          </div>
        </div>
        </div>

        <div className='md:hidden flex justify-between items-center'>
        <div className='flex gap-1 items-center'>
          <img src={`/${img3}.png`}  className='w-[20px] h-[25px] object-contain' />
          <div className='flex flex-col'>
            <p className='text-[15px]'>7-Day</p>
            <p className='text-[13px]'>Replacement</p>
          </div>
        </div>

        <div className='flex gap-1 items-center'>
          <img src={`/${img4}.png`}  className='w-[20px] h-[25px] object-contain' />
          <div className='flex flex-col   '>
            <p className='text-[15px] '>100% Secure</p>
            <p className='text-[13px]'>Payments</p>
          </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default ProductService
