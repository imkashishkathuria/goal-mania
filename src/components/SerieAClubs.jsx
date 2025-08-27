import React from 'react'
import HomeSections from './HomeSections'

const SerieAClubs = () => {
  return (
    <div className='px-7 md:px-0 py-7 flex justify-center'>
      
      <HomeSections heading="Serie A Clubs" subheading="Explore all Serie A teams from legendary giants to rising challengers. Click a logo to see the latest news, matches, and updates for each club." gap="8" cards={
        
        <div className='flex gap-3 md:gap-5 '>
            {["Ellipse 1", "Ellipse 2", "Ellipse 13", "Ellipse 3", "Frame 238098", "Frame 238091", "Frame 238092", "Frame 238093", "Frame 238094", "Frame 238095", "Frame 238096", "Frame 238097"].map((item, index) => (
                <img src={`/${item}.png`} key={index} className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] cursor-pointer object-contain' />
            ))}

        </div>
      }/>

    </div>
  )
}

export default SerieAClubs
