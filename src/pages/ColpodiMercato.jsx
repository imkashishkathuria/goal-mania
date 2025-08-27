import React, { useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeSections from '../components/HomeSections'

const ColpodiMercato = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (direction === "left") {
            scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
        } else {
            scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
        }
    };

    const articles = [
        {
            img: "/Frame 237883 (13).png",
            title: "Chiesa rinnova con la Juventus",
            desc: "Federico Chiesa firma il rinnovo con la Juventus fino al 2028, respingendo le offerte di diversi club europei.",
        },
        {
            img: "/Frame 237883 (14).png",
            title: "Scamacca torna in Italia",
            desc: "Dopo l’esperienza in Premier League con il West Ham, Gianluca Scamacca firma con l’Atalanta per 25 milioni di euro.",
        },
        {
            img: "/Frame 237883 (14).png",
            title: "Osimhen verso la Ligue 1",
            desc: "Victor Osimhen, capocannoniere della Serie A, vicino a un trasferimento al Marsiglia.",
        },
       
    ];

    return (
        <div>
            <Header />
            <div className='mt-8'>
                <HomeSections headingcolor="#FF7A00" gap="4" heading="Colpo di Mercato" subheading="Firma avvenuta dopo settimane di trattative" cards={
                    <div className='flex gap-3 md:gap-5 pl-4'>
                        {["Frame 238069", "Frame 238070", "Frame 238071", "Frame 238071", "Frame 238070"].map((item, index) => (
                            <img src={`/${item}.png`} key={index} className='w-[100px] h-[120px] md:w-[300px] md:h-[250px] object-contain' />
                        ))}
                    </div>
                } />
            </div>

            <div className="w-full md:ml-7 text-center pl-6 mt-6 md:mt-20">
                {/* Header */}
                <h2 className="text-2xl md:text-3xl text-center font-semibold md:font-normal text-[25px] md:text-[45px]  text-[#FF7A00] mb-2">
                    Tonali al Newcastle: Colpo da Record
                </h2>
                <p className="hidden md:block text-[17px]  text-[#333333] text-center mt-6 mb-6">
                    Il centrocampista lascia il Milan per 70 milioni, approdando in Premier
                    League.
                </p>
                <p className="md:hidden text-[10px] pr-4 text-[#333333] text-center mt-6 mb-6">
                   Rimani aggiornato con le novità più importanti dal mondo del calcio: trasferimenti, risultati, curiosità e tanto altro in tempo reale.
                </p>

                {/* Scrollable Cards */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-4 no-scrollbar pb-4 mt-10"
                >
                    {articles.map((item, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-50 md:w-130 bg-white rounded-lg overflow-hidden text-left"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full object-cover"
                            /> 
                            <div className="p-4">
                                <h3 className="font-bold text-[14px] md:text-[22px] text-[#000000] mb-2">{item.title}</h3>
                            <p className="text-[10px] md:text-[13px] text-[#000000] mb-4">{item.desc}</p>
                                <div className='border-t border-black md:w-[300px]' />
                                <button className="text-sm text-[#000000]  font-semibold">
                                    Leggi Ora →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroll Buttons Below */}
                <div className="hidden md:flex justify-center gap-4 mt-4">
                    <img src='/Frame 237997.png' className='w-[40px] h-[40px] cursor-pointer' onClick={() => scroll("left")}/>
            <img src='/Frame 237998.png' className='w-[40px] h-[40px] cursor-pointer' onClick={() => scroll("right")} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ColpodiMercato
