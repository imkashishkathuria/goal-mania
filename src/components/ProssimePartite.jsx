import React from 'react'
import HomeSections from './HomeSections'

const ProssimePartite = ({heading}) => {
  return (
    <div className='px-4 md:px-0 py-7 justify-center items-center'>
        <HomeSections headingcolor={heading} heading="Prossime Partite" subheading="Non perdere le sfide più attese della settimana: ecco il calendario delle prossime partite di Serie A e Champions League." gap="5" cards={
            <div className='flex gap-3 md:gap-7 px-6 md:px-15 w-[100vw] md:w-full overflow-auto md:overflow-hidden -mt-5 md:-mt-0'>
                {["Group 85", "Group 86", "Group 87", "Group 88"].map((item, index) => (
                    <img src={`/${item}.png`} key={index} className='w-[100px] h-[120px] md:w-[300px] md:h-[250px] object-contain' />
                ))}
                </div>
        } />
      
    </div>
  )
}

export default ProssimePartite
