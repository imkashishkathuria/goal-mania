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
      {/* <UltimeNotizie img1="/Frame 237883 (10).png" img2="/Frame 237883 (11).png" img3="/Frame 237883 (12).png" /> */}
      <div className='px-7 md:px-0 flex justify-center items-center py-7'>
        <HomeSections headingcolor="#FF7A00"  heading="Ultime Notizie" subheading="Rimani aggiornato con le novità più importanti dal mondo del calcio: trasferimenti, risultati, curiosità e tanto altro in tempo reale." gap="5" cards={
            <div className='flex px-3 md:px-20 gap-3 overflow-x-auto md:overflow-hidden'>
            
                  <div className='md:hidden w-[200px] shrink-0'>
                <HomeCards image="/Frame 237883 (10).png" imgwidth="400" imgheight="250" heading="Inzaghi all’Al-Hilal" subheading="Simone Inzaghi lascia l’Inter per una nuova avventura in Arabia Saudita con un contratto da 10 milioni a stagione."  hr={
                    <div className='border-t border-black md:w-[300px]' />
                }
                btn3={
                    <img src='/Frame 237925.png' className='w-[75px] h-[18px] object-contain' />
                } 
                />
                </div>
                  <div className='hidden md:block w-full'>
                <HomeCards image="/Frame 237883 (10).png"heading="Inzaghi all’Al-Hilal" subheading="Simone Inzaghi lascia l’Inter per una nuova avventura in Arabia Saudita con un contratto da 10 milioni a stagione."  hr={
                    <div className='border-t border-black md:w-[300px]' />
                }
                btn3={
                    <img src='/Frame 237925.png' className='w-[75px] h-[18px] object-contain' />
                } 
                />
                </div>
                 <div className='md:hidden w-[200px] shrink-0'>
                <HomeCards image="/Frame 237883 (11).png" imgwidth="400" imgheight="250" heading="Serie A: Calendario 2024/25" subheading="Ufficializzate le date della prossima stagione: big match e derby già attesi dai tifosi."  hr={
                    <div className='border-t border-black md:w-[300px]' />
                }
                btn3={
                    <img src='/Frame 237925.png' className='w-[75px] h-[18px] object-contain' />
                } 
                />
                
                </div>

                 <div className='hidden md:block w-full'>
                <HomeCards image="/Frame 237883 (11).png"  imgwidth="400" imgheight="250" heading="Serie A: Calendario 2024/25" subheading="Ufficializzate le date della prossima stagione: big match e derby già attesi dai tifosi."  hr={
                    <div className='border-t border-black md:w-[300px]' />
                }
                btn3={
                    <img src='/Frame 237925.png' className='w-[75px] h-[18px] object-contain' />
                } 
                />
                
                </div>

                
                 <div className='md:hidden w-[200px] shrink-0'>
                <HomeCards image="/Frame 237883 (12).png" imgwidth="400" imgheight="250" heading="Colpo di Mercato del Milan" subheading="Arriva un nuovo attaccante internazionale per rinforzare il reparto offensivo rossonero." hr={
                    <div className='border-t border-black md:w-[300px]' />
                }
                btn3={
                    <img src='/Frame 237925.png' className='w-[75px] h-[18px] object-contain' />
                } 
                />
                </div>
                <div className='hidden md:block w-full'>
                <HomeCards image="/Frame 237883 (12).png" imgwidth="400" imgheight="250" heading="Colpo di Mercato del Milan" subheading="Arriva un nuovo attaccante internazionale per rinforzare il reparto offensivo rossonero." hr={
                    <div className='border-t border-black md:w-[300px]' />
                }
                btn3={
                    <img src='/Frame 237925.png' className='w-[75px] h-[18px] object-contain' />
                } 
                />
                </div>
                </div>
        }/>
      
    </div>
      <Footer />
    </div>
  )
}

export default ChampionsLeague
