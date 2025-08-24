import React from 'react'
import Header from '../components/Header'
import HomeSections from '../components/HomeSections'
import UltimeNotizie from '../components/UltimeNotizie'
import Footer from '../components/Footer'

const SeriesA = () => {
  return (
    <div>
      <Header />
      <div className='py-3 md:py-7'>
        <HomeSections heading="Serie A" subheading="Rimani aggiornato con le novità più importanti dal mondo del calcio: trasferimenti, risultati, curiosità e tanto altro in tempo reale." cards={
          <div className='p-3 flex gap-3 justify-between w-[100vw] md:w-full overflow-auto md:overflow-hidden'>
            {["/Table Column.png", "/Table Column (1).png", "Table Column (2).png"].map((item, index) => (
              <img src={item} key={index} className='w-[250px] md:w-[400px] obejct-contain' />
            ))}

          </div>

        } />
      </div>

      <div className='py-3 md:py-7'>
        <HomeSections heading="Classifica" subheading="Rimani aggiornato con le novità più importanti dal mondo del calcio: trasferimenti, risultati, curiosità e tanto altro in tempo reale." cards={
          <div className='px-6 md:px-20 w-[100vw] md:w-full overflow-auto md:overflow-hidden'>
            <img src='/Leaderboard Table.png' className=' object-contain' />
            </div>
        }/>
      </div>
      <UltimeNotizie />
      <Footer />
    </div>
  )
}

export default SeriesA
