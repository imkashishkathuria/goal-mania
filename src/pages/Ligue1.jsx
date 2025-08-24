import React from 'react'
import Header from '../components/Header'
import HomeSections from '../components/HomeSections'
import Classifica from '../components/Classifica'
import UltimeNotizie from '../components/UltimeNotizie'
import Footer from '../components/Footer'

const Ligue1 = () => {
  return (
    <div>
      <Header />
      <div className='py-3 md:py-7'>
        <HomeSections heading="Ligue 1" subheading="Rimani aggiornato con le novità più importanti dal mondo del calcio: trasferimenti, risultati, curiosità e tanto altro in tempo reale." cards={
          <div className='p-3 flex gap-3 justify-between w-[100vw] md:w-full overflow-auto md:overflow-hidden'>
            {["/Table Column.png", "/Table Column (1).png", "/Table Column (2).png"].map((item, index) => (
              <img src={item} key={index} className='w-[250px] md:w-[400px] obejct-contain' />
            ))}

          </div>

        } />
      </div>
      <Classifica />
      <UltimeNotizie img1="/Frame 237883 (8).png" img2="/Frame 237883 (9).png" img3="/a46443266d890128c17885167521f18502a63998.jpg" />
      <Footer />
    </div>

  )
}

export default Ligue1
