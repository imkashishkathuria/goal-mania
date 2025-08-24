import React from 'react'
import HomeSections from './HomeSections'

const Classifica = () => {
  return (
    <div>
      <div className='py-3 md:py-7'>
        <HomeSections heading="Classifica" subheading="Rimani aggiornato con le novità più importanti dal mondo del calcio: trasferimenti, risultati, curiosità e tanto altro in tempo reale." cards={
          <div className='px-6 md:px-20 w-[100vw] md:w-full overflow-auto md:overflow-hidden'>
            <img src='/Leaderboard Table.png' className=' object-contain' />
            </div>
        }/>
      </div>
    </div>
  )
}

export default Classifica
