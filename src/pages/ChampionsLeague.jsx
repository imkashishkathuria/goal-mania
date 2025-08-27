import React from 'react'
import Header from '../components/Header'
import HeroCard from '../components/HeroCard'
import ProssimePartite from '../components/ProssimePartite'
import UltimeNotizie from '../components/UltimeNotizie'
import Footer from '../components/Footer'

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
      <UltimeNotizie img1="/Frame 237883 (10).png" img2="/Frame 237883 (11).png" img3="/Frame 237883 (12).png" />
      <Footer />
    </div>
  )
}

export default ChampionsLeague
