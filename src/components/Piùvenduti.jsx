import React from 'react'
import HomeSections from './HomeSections'
import UltimiCard from './UltimiCard'

const Piùvenduti = () => {
  return (
    <div>
      <HomeSections heading="Più venduti" subheading="Il capo che unisce la comodità di un fit impeccabile alla raffinatezza di un design curato nei dettagli." gap="7" cards={
        <div className='flex overflow-auto md:overflow-hidden gap-2 md:gap-6 px-5 md:pl-10'>

            <div className='md:hidden w-[100px] shrink-0'>
          <UltimiCard />
          </div>
            <div className='hidden md:block'>
              <UltimiCard />
            </div>
        </div>
        } />
    </div>
  )
}

export default Piùvenduti
