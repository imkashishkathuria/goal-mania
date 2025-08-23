import React from 'react'
import HeroCard from './HeroCard'

const HomeHero = () => {
  return (
    <div>
      <div className='relative'>
        <img src='/Frame 238056.png' className='hidden md:block inset-0 w-full'/>
        <img src='/IMG_6873 2.png' className='md:hidden inset-0 w-full' />
        <div className='absolute inset-0 translate-y-20 ml-17'>
          <HeroCard heading="Resta Sempre Aggiornato sul Mondo del Calcio" subheading="Dalle ultime novità di Serie A ai colpi di mercato internazionali, scopri notizie fresche, analisi e approfondimenti in tempo reale."/>
        </div>
          
      </div>
    </div>
  )
}

export default HomeHero
