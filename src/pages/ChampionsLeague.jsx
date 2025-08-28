import React from 'react'
import Header from '../components/Header'
import HeroCard from '../components/HeroCard'
import ProssimePartite from '../components/ProssimePartite'
import UltimeNotizie from '../components/UltimeNotizie'
import Footer from '../components/Footer'
import HomeSections from '../components/HomeSections'
import HomeCards from '../components/HomeCards'

const ChampionsLeague = () => {
  return (
    <div>
      <Header />
      {/* Hero section */}
      <div className='relative'>
        <img src='/Frame 238056 (3).png' className='hidden md:block inset-0 w-full' />
        <img src='/Frame 238060.png' className='md:hidden object-contain' />

        


        <div className='hidden md:block absolute inset-0 translate-y-1/2 ml-3 mr-3 md:mr-0 md:translate-y-20 md:ml-17'>
          <div className='flex flex-col gap-3 w-[320px]  md:h-[270px] md:w-[680px]'>
            <h1 className='font-extrabold text-[25px] md:text-left md:text-[45px] text-[#F5F5F5] md:w-[620px]'>Champions League</h1>
            <p className='text-[11px] md:text-[16px]  text-[#FFFFFF] w-[320px] md:w-[540px]'>Segui la competizione più prestigiosa d’Europa con notizie, risultati in
              tempo reale, analisi delle partite e curiosità sui club protagonisti.</p>

          </div>
        </div>

      </div>

      <ProssimePartite heading="#FF7A00" />
      <UltimeNotizie img1="/Frame 237883 (8).png" img2="/Frame 237883 (9).png" img3="/a46443266d890128c17885167521f18502a63998.jpg" heading="Ultime Notizie" paragraph="Rimani aggiornato con le novità più importanti dal mondo del calcio: trasferimenti, risultati, curiosità e tanto altro in tempo reale." title1="Inzaghi all’Al-Hilal" title2="Serie A: Calendario 2024/25" title3="Colpo di Mercato del Milan" desc1="Simone Inzaghi lascia l’Inter per una nuova avventura in Arabia Saudita con un contratto da 10 milioni a stagione." desc2="Ufficializzate le date della prossima stagione: big match e derby già attesi dai tifosi." desc3="Arriva un nuovo attaccante internazionale per rinforzare il reparto offensivo rossonero." headingcolor="#FF7A00" />
      <Footer />
    </div>
  )
}

export default ChampionsLeague
