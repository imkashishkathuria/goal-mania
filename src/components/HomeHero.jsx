import React from 'react'
import HeroCard from './HeroCard'

const HomeHero = () => {
  return (
    <div>
      <div className='relative'>
        <img src='/Frame 238056.png' className='hidden md:block inset-0 w-full' />

        <div className="md:hidden relative w-full">
          {/* Top image with gradient fade at bottom */}
          <div className="relative">
            <img
              src="/IMG_6873 2.png"
              className="w-full block mask-gradient-bottom"
            />
            {/* Gradient overlay at the bottom of the first image */}
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-white" />
          </div>

          {/* Second image continues seamlessly below */}
          <div className="relative -mt-90 "> {/* pull it up to overlap more */}
            <img
              src="/Rectangle 2 (2).png"
              className="w-full block mask-gradient-top-bottom"
            />
          </div>
        </div>


        <div className='absolute inset-0 translate-y-1/2 mt-23 ml-3 mr-3 md:mr-0 md:translate-y-20 md:ml-17'>
          <HeroCard heading="Resta Sempre Aggiornato sul Mondo del Calcio" subheading="Dalle ultime novità di Serie A ai colpi di mercato internazionali, scopri notizie fresche, analisi e approfondimenti in tempo reale." />
        </div>

      </div>
    </div>
  )
}

export default HomeHero
