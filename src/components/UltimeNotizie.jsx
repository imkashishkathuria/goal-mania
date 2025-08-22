import React from 'react'
import HomeSections from './HomeSections'
import HomeCards from './HomeCards'

const UltimeNotizie = () => {
  return (
    <div className='flex justify-center items-center py-7'>
        <HomeSections heading="Ultime Notizie" subheading="Rimani aggiornato con le novità più importanti dal mondo del calcio: trasferimenti, risultati, curiosità e tanto altro in tempo reale." gap="5" cards={
            <div className='flex px-20'>
                <HomeCards image="/Frame 237883.png" imgwidth="400" imgheight="250" heading="Inzaghi all’Al-Hilal" subheading="Simone Inzaghi lascia l’Inter per una nuova avventura in Arabia Saudita con un contratto da 10 milioni a stagione." subWidth="350" hr={
                    <div className='border-t border-black w-[300px]' />
                }
                btn3={
                    <img src='/Frame 237925.png' className='w-[75px] h-[18px] object-contain' />
                } 
                />

                <HomeCards image="/Frame 237883 (1).png" imgwidth="400" imgheight="250" heading="Serie A: Calendario 2024/25" subheading="Ufficializzate le date della prossima stagione: big match e derby già attesi dai tifosi." subWidth="350" hr={
                    <div className='border-t border-black w-[300px]' />
                }
                btn3={
                    <img src='/Frame 237925.png' className='w-[75px] h-[18px] object-contain' />
                } 
                />

                <HomeCards image="/9e9f636a4abf54d1438e0b68d45f7fe2fd3b75ab.jpg" imgwidth="400" imgheight="250" heading="Colpo di Mercato del Milan" subheading="Arriva un nuovo attaccante internazionale per rinforzare il reparto offensivo rossonero." subWidth="350" hr={
                    <div className='border-t border-black w-[300px]' />
                }
                btn3={
                    <img src='/Frame 237925.png' className='w-[75px] h-[18px] object-contain' />
                } 
                />
                </div>
        }/>
      
    </div>
  )
}

export default UltimeNotizie
