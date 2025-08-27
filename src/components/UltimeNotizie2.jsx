import React from 'react'
import HomeSections from './HomeSections'

const UltimeNotizie2 = () => {
  return (
    <div>
    <div className='py-7 justify-between items-center'>
      <HomeSections heading="Ultime Notizie" subheading="Scopri le notizie più fresche e importanti dal mondo del calcio, aggiornate in tempo reale." gap="5" cards={
        <div className='flex gap-1 pl-3 md:pl-0'>
          <img src='/Frame 237934.png' className='w-full h-[350px] md:h-[500px] object-contain' />
           <img src='/Frame 237933.png' className='w-full h-[350px] md:h-[500px] object-contain'/>
            <img src='/Frame 237936 (1).png' className='w-full h-[350px] md:h-[500px] object-contain'/>
             <img src='/Frame 237935.png' className='w-full h-[350px] md:h-[500px] object-contain'/>
              <img src='/Frame 237938.png' className='w-full h-[350px] md:h-[500px] object-contain' />
          </div>
      } />
      
      </div>
      
    </div>
  )
}

export default UltimeNotizie2
