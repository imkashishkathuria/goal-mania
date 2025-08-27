import React from 'react'
import HomeSections from './HomeSections'
import HomeCards from './HomeCards'

const UltimeNotizie = ({ img1, img2, img3 }) => {
  return (
    <div className='px-7 md:px-0 flex justify-center items-center py-7'>
        <HomeSections  heading="Ultime Notizie" subheading="Rimani aggiornato con le novità più importanti dal mondo del calcio: trasferimenti, risultati, curiosità e tanto altro in tempo reale." gap="5" cards={
            <div className='flex px-3 md:px-20 gap-3 overflow-x-auto md:overflow-hidden'>
            
                  <div className='md:hidden w-[200px] shrink-0'>
                <HomeCards image={img1} imgwidth="400" imgheight="250" heading="Inzaghi all’Al-Hilal" subheading="Simone Inzaghi lascia l’Inter per una nuova avventura in Arabia Saudita con un contratto da 10 milioni a stagione."  hr={
                    <div className='border-t border-black md:w-[300px]' />
                }
                btn3={
                    <img src='/Frame 237925.png' className='w-[75px] h-[18px] object-contain' />
                } 
                />
                </div>
                  <div className='hidden md:block w-full'>
                <HomeCards image={img1} heading="Inzaghi all’Al-Hilal" subheading="Simone Inzaghi lascia l’Inter per una nuova avventura in Arabia Saudita con un contratto da 10 milioni a stagione."  hr={
                    <div className='border-t border-black md:w-[300px]' />
                }
                btn3={
                    <img src='/Frame 237925.png' className='w-[75px] h-[18px] object-contain' />
                } 
                />
                </div>
                 <div className='md:hidden w-[200px] shrink-0'>
                <HomeCards image={img2} imgwidth="400" imgheight="250" heading="Serie A: Calendario 2024/25" subheading="Ufficializzate le date della prossima stagione: big match e derby già attesi dai tifosi."  hr={
                    <div className='border-t border-black md:w-[300px]' />
                }
                btn3={
                    <img src='/Frame 237925.png' className='w-[75px] h-[18px] object-contain' />
                } 
                />
                
                </div>

                 <div className='hidden md:block w-full'>
                <HomeCards image={img2}  imgwidth="400" imgheight="250" heading="Serie A: Calendario 2024/25" subheading="Ufficializzate le date della prossima stagione: big match e derby già attesi dai tifosi."  hr={
                    <div className='border-t border-black md:w-[300px]' />
                }
                btn3={
                    <img src='/Frame 237925.png' className='w-[75px] h-[18px] object-contain' />
                } 
                />
                
                </div>

                
                 <div className='md:hidden w-[200px] shrink-0'>
                <HomeCards image={img3} imgwidth="400" imgheight="250" heading="Colpo di Mercato del Milan" subheading="Arriva un nuovo attaccante internazionale per rinforzare il reparto offensivo rossonero." hr={
                    <div className='border-t border-black md:w-[300px]' />
                }
                btn3={
                    <img src='/Frame 237925.png' className='w-[75px] h-[18px] object-contain' />
                } 
                />
                </div>
                <div className='hidden md:block w-full'>
                <HomeCards image={img3} imgwidth="400" imgheight="250" heading="Colpo di Mercato del Milan" subheading="Arriva un nuovo attaccante internazionale per rinforzare il reparto offensivo rossonero." hr={
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
  )
}

export default UltimeNotizie
