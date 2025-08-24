import React from 'react'
import ReviewCard from './ReviewCard'

const Reviews = () => {
    return (
        <div>
            <div className='flex flex-col gap-3 md:gap-5 py-9 md:py-12 px-6 md:px-25'>
                <div className='flex md:justify-between items-center'>
                    <h1 className='text-[22px] text-center md:text-[35px] font-extrabold text-[#000000]'>I nostri clienti felici</h1>
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
        </div>
    )
}

export default Reviews
