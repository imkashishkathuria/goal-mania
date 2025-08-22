import React from 'react'

const ReviewCard = ({name, review}) => {
  return (
    <div className='border border-[#0000001A] rounded-[10px] p-6 flex flex-col gap-2'>
        <img src='/Frame 10.png' className='w-[70px] h-[15px] object-contain' />
        <div className='flex items-center gap-2'>
            <p className='text-[#000000] text-[16px] font-bold'>{name}</p>
            <img src='/Vector (4).png' className='w-[13px] h-[13px] object-contain' />
        </div>
        <p className='text-[16px] text-[#00000099] w-[300px]'>
            {review}
        </p>
    </div>
  )
}

export default ReviewCard
