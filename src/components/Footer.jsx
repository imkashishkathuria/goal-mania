import React from 'react'
import Button from './Button'

const Footer = () => {
  return (
    <div className='flex flex-col gap-10 justify-center items-center px-45 py-15'>
        <div className='flex flex-col gap-3 text-center'>
            <h1 className='text-[#0A1A2F] text-[26px] font-bold'>Resta informato. Rimani un passo avanti.</h1>
            <p className='text-[#333333] text-[18px] '>Iscriviti alla nostra newsletter per ricevere direttamente nella tua casella di posta gli ultimi aggiornamenti sulle partite, le notizie di mercato, interviste esclusive e offerte speciali da Goal-Mania.</p>
        </div>
        <div className='bg-[#D9D9D9] rounded-[40px] w-full px-8 py-6 flex justify-between items-center'>
            <p className='text-[#333333] text-[18px]'>Inserisci la tua email</p>
            <Button text="Iscriviti" px="20" py="6" size="13px" />
        </div>
        <div className='flex justify-between items-center px-5'>
            <div className='flex gap-10 border-r border-[#333333]  pr-7'>
            {["about", "blog", "contact", "privacy", "terms", "shipping"].map((item, index) => (
                <p className='text-[#333333] text-[13px] capitalize'>{item}</p>
            ))}
            </div>
            <div className='flex gap-7 ml-6'>
                {["Group 1 (1)", "Group 2", "Group 3", "Group 4"].map((item, index) => (
                    <img src={`/${item}.png`} />
                ))}
            </div>
        </div>
        <p className='text-[#333333] text-[12px] py-7'>© 2025 Goal Mania. All rights reserved.</p>
         
      
    </div>
  )
}

export default Footer
