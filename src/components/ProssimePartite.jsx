import React from 'react'
import HomeSections from './HomeSections'

const ProssimePartite = () => {
  return (
    <div className='py-7 justify-center items-center'>
        <HomeSections heading="Prossime Partite" subheading="Non perdere le sfide più attese della settimana: ecco il calendario delle prossime partite di Serie A e Champions League." gap="5" cards={
            <div className='flex gap-7 px-15 overflow-hidden'>
                {["Group 85", "Group 86", "Group 87", "Group 88"].map((item, index) => (
                    <img src={`/${item}.png`} key={index} className='w-[300px] h-[250px] object-contain' />
                ))}
                </div>
        } />
      
    </div>
  )
}

export default ProssimePartite
