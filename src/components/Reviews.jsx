import React, { useRef } from 'react'
import ReviewCard from './ReviewCard'

const Reviews = () => {
    const scrollRef = useRef(null);
    
      const scroll = (direction) => {
        if(direction === "left"){
          scrollRef.current.scrollBy({ left: -350, behavior: "smooth"});
        }else{
          scrollRef.current.scrollBy({ left: 350, behavior: "smooth"});
        }
      }
    return (
        <div>
            <div className='flex flex-col gap-3 md:gap-5 py-9 md:py-12 px-6 md:pl-25'>
                <div className='flex md:justify-between items-center'>
                    <h1 className='text-[22px] text-center md:text-[35px] font-extrabold text-[#000000]'>I nostri clienti felici</h1>
                    <div className='hidden md:flex gap-2  mr-15'  >
                        <img src='/arrow-down-bold 2.png' className='w-[17px] h-[17px]' onClick={() => scroll("left")} />
                        <img src='/arrow-down-bold 1.png' className='w-[17px] h-[17px]' onClick={() => scroll("right")} />
                    </div>
                </div>
                <div className='flex gap-3 overflow-x-auto md:overflow-hidden scroll-smooth' ref={scrollRef}>
                    <ReviewCard name="Sarah M." review="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”" />
                    <ReviewCard name="Alex K." review="Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”" />
                    <ReviewCard name="James L." review="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”" />
                    <ReviewCard name="James L." review="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”" />
                    <ReviewCard name="James L." review="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”" />
                    <ReviewCard name="James L." review="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”" />
                </div>
            </div>
        </div>
    )
}

export default Reviews
