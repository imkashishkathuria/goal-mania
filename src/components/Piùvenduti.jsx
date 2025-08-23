import React from 'react'
import HomeSections from './HomeSections'
import UltimiCard from './UltimiCard'

const Piùvenduti = () => {
  return (
    <div>
      <HomeSections heading="Più venduti" subheading="Il capo che unisce la comodità di un fit impeccabile alla raffinatezza di un design curato nei dettagli." gap="7" cards={
          <UltimiCard />

        } />
    </div>
  )
}

export default Piùvenduti
