import React from 'react'
import HomeSections from './HomeSections'
import HomeCards from './HomeCards'

const StorieinPrimoPiano = () => {
  return (
    <div className='py-7 justify-center items-center'>
        <HomeSections heading="Storie in Primo Piano" subheading="Approfondimenti, interviste e articoli esclusivi che raccontano il calcio oltre il risultato." gap="5" cards={
            <div className='flex gap-2 px-20'> 
                <HomeCards image="/Frame 237883 (2).png" heading="Il Ritorno del Derby della Madonnina" subheading="Un’analisi tattica e storica della sfida tra Inter e Milan." hr={
                    <div className='border-t border-black w-[300px]' />
                } />

                <HomeCards image="/Frame 237883 (3).png" heading="Giovani Talenti da Tenere d’Occhio" subheading="I prospetti che stanno conquistando la Serie A." hr={
                    <div className='border-t border-black w-[300px]' />
                } />

                <HomeCards image="/4504157350d6e5f3d2ffec113dd23de01818f69d (1).jpg" heading="Il Ritorno del Derby della Madonnina" subheading="Un’analisi tattica e storica della sfida tra Inter e Milan."  hr={
                    <div className='border-t border-black w-[300px]' />
                } />
 
            </div>
        }/>
      
    </div>
  )
}

export default StorieinPrimoPiano
