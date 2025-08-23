import React from 'react'
import HomeSections from './HomeSections'

const UltimeNotizie2 = () => {
  return (
    <div>
    <div className='hidden md:block py-7 justify-between items-center'>
      <HomeSections heading="Ultime Notizie" subheading="Scopri le notizie più fresche e importanti dal mondo del calcio, aggiornate in tempo reale." gap="5" cards={
        <img src='/Frame 237936.png' />
      } />
      
      </div>
      <div className='md:hidden py-5 px-4'>
        <img src='/Frame 237851.png' />
      </div>
    </div>
  )
}

export default UltimeNotizie2
