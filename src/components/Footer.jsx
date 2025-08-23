import React from 'react'
import Button from './Button'

const Footer = () => {
    return (
        <div className='-mb-7'>
            <div className='hidden md:flex flex-col gap-10 justify-center items-center px-45 py-15'>
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
            <div className='md:hidden'>
                <footer className="bg-black text-white px-6 md:px-16 py-10">
                    {/* Top Section */}
                    <div className="flex flex-col gap-4">
                        {/* Logo */}
                        <img src="/logo.png" alt="Goalmania Logo" className="w-12 h-12" />

                        {/* Description */}
                        <p className="text-sm text-gray-300 max-w-xl leading-relaxed">
                            Goalmania è il punto di riferimento per chi vive il calcio. Ogni giorno
                            raccontiamo storie, notizie e curiosità dal mondo del calcio. In più,
                            ti offriamo le maglie più amate — attuali e retrò — a partire da 30€, con
                            spedizione gratuita.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-600 my-6" />

                    {/* Links Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                        <div className="flex flex-col gap-2">
                            <p className="hover:text-orange-500 cursor-pointer">About US</p>
                            <p className="hover:text-orange-500 cursor-pointer">Contact</p>
                            <p className="hover:text-orange-500 cursor-pointer">Blog</p>
                            <p className="hover:text-orange-500 cursor-pointer">Shop</p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">Usefull Links</p>
                            <p className="hover:text-orange-500 cursor-pointer">Privacy</p>
                            <p className="hover:text-orange-500 cursor-pointer">Terms</p>
                            <p className="hover:text-orange-500 cursor-pointer">Shipping</p>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 text-center text-xs text-gray-400">
                        © 2025 Goal Mania. All Rights Reserved.
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Footer
