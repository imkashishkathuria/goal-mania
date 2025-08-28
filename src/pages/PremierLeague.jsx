import React from 'react'
import Header from '../components/Header'
import HomeSections from '../components/HomeSections'
import Classifica from '../components/Classifica'
import UltimeNotizie from '../components/UltimeNotizie'
import Footer from '../components/Footer'

const PremierLeague = () => {
  return (
    <div>
      <Header />
      <div className='py-3 md:py-7'>
        <HomeSections heading="Premier League" subheading="Rimani aggiornato con le novità più importanti dal mondo del calcio: trasferimenti, risultati, curiosità e tanto altro in tempo reale." cards={
          <div className='p-3 flex gap-3 justify-between w-[100vw] md:w-full overflow-auto md:overflow-hidden'>
            {["/Table Column.png", "/Table Column (1).png", "/Table Column (2).png"].map((item, index) => (
              <img src={item} key={index} className='w-[250px] md:w-[400px] obejct-contain' />
            ))}

          </div>

        } />
      </div>
      <Classifica  />
      <UltimeNotizie img1="/Frame 237883 (6).png" img2="/Frame 237883 (7).png" img3="/a46443266d890128c17885167521f18502a63998.jpg" heading="Ultime Notizie" paragraph="Rimani aggiornato con le novità più importanti dal mondo del calcio: trasferimenti, risultati, curiosità e tanto altro in tempo reale." title1="Inzaghi all’Al-Hilal" title2="Serie A: Calendario 2024/25" title3="Colpo di Mercato del Milan" desc1="Simone Inzaghi lascia l’Inter per una nuova avventura in Arabia Saudita con un contratto da 10 milioni a stagione." desc2="Ufficializzate le date della prossima stagione: big match e derby già attesi dai tifosi." desc3="Arriva un nuovo attaccante internazionale per rinforzare il reparto offensivo rossonero." />
      <Footer />
    </div>
  )
}

export default PremierLeague
