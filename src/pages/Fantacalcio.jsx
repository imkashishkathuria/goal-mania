import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UltimeNotizie from '../components/UltimeNotizie'

const Fantacalcio = () => {

  const matches = [
    { id: 1, home: "Napoli", away: "Lazio" },
    { id: 2, home: "Napoli", away: "Lazio" },
    { id: 3, home: "Napoli", away: "Lazio" },
    { id: 4, home: "Napoli", away: "Lazio" },
  ];

  return (
    <div>
      <Header />

      <div className='flex flex-col-reverse md:flex-row gap-5 px-5 md:px-20 py-5 items-center'>
        <img src='/Card Match.png' className='md:w-200' />
        <div className='flex flex-col gap-3'>
          <h1 className='text-[20px] text-center md:text-left md:text-[40px] font-extrabold'>Partite Live in Tempo Reale</h1>
          <p className='text-[10px] md:text-[18px] text-center md:text-left'>Segui in tempo reale risultati, statistiche e momenti chiave per prendere decisioni vincenti nella tua squadra Fantasy.</p>
        </div>
      </div>

      <div className="hidden md:flex px-20 gap-12">
        <img src='/Frame 237997.png' className='w-[40px] h-[40px] cursor-pointer' />
        <img src='/Frame 237998.png' className='w-[40px] h-[40px] cursor-pointer' />
      </div>

      <div className="flex flex-col-reverse md:grid lg:grid-cols-3 gap-8  md:px-20 md:py-12">
        {/* Left Section - Matches */}
        <div className="lg:col-span-2 px-5">
          <h2 className="text-[30px] md:text-[40px] text-center md:text-left font-extrabold mb-2">Partite Recenti</h2>
          <p className="text-black mb-6 text-[12px] text-center md:text-left md:text-[18px]">
            Scopri i risultati e i momenti salienti delle ultime sfide.
          </p>

          {/* Matches Grid */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-6">
            {matches.map((match) => (
              <div
                key={match.id}
                className="relative flex bg-white shadow-md rounded-lg overflow-hidden"
              >
                {/* Player Image (left) */}
                <img
                  src="/Card Match (1).png"
                  alt="player"
                  className=""
                />

                {/* Match Details (right) */}
              
              </div>
            ))}
          </div>
          <div className='md:hidden'>
            <img src='/Card Match (1).png' />
          </div>
        </div>

        {/* Right Section - Fantacalcio Tips */}
        <div className="bg-[#F5F5F5] md:shadow-md md:rounded-2xl p-6">
          <h3 className="text-[20px] text-center md:text-left md:text-[30px] font-extrabold mb-2">Consigli Fantacalcio</h3>
          <div className='flex flex-col md:flex-row gap-2 items-center'>
            <p className="text-black text-[13px] mb-2 md:mb-4">Suggerimenti Fantacalcio</p>
            {/* Action Buttons */}
          <div className="flex gap-2 mb-6">
            <button className="bg-orange-500 text-[12px] text-white px-5 py-1 rounded-full">
              Salva
            </button>
            <button className="bg-[#333333] text-white text-[12px] px-5 py-1 rounded-full">
              Annulla
            </button>
          </div>
          </div>


          

          {/* Players to Buy */}
          <div className="bg-[#C0FFDD]/80 border border-[#38A169] rounded-lg p-2 md:p-4 mb-6">
            <div className='flex gap-2 items-center'>
              <img src='/Group (5).png' />
              <h4 className="text-black font-bold mb-3">
              Giocatori da Acquistare
            </h4> 
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <input
                type="text"
                placeholder="Nome"
                className="flex-1 border px-2 text-[5px] md:text-[10px] py-1 rounded-full bg-white"
              />
              <input
                type="text"
                placeholder="Squad"
                className="flex-1 border px-2 py-1 text-[5px] md:text-[10px] rounded-full bg-white"
              />
             
              <button className="text-black text-xs font-bold">✕</button>
            </div>
            <button className=" bg-[#0A1A2F] py-2 w-full rounded-full text-[10px] md:text-xs text-white font-medium">
              + Aggiungi Giocatore
            </button>
          </div>

          {/* Players to Avoid */}
          <div className="bg-[#FFBDBD]/80 border border-[#E53E3E] rounded-lg p-2 md:p-4">
            <div className='flex gap-2 items-center'>
              <img src='/Group (5).png' />
              <h4 className="text-black font-bold mb-3">
              Giocatori da Acquistare
            </h4> 
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <input
                type="text"
                placeholder="Nome"
                className="flex-1 border px-2 py-1 text-[5px] md:text-[10px] rounded-full bg-white"
              />
              <input
                type="text"
                placeholder="Squad"
                className="flex-1 border px-2 text-[5px] md:text-[10px] py-1 rounded-full bg-white"
              />
              
              <button className="text-black text-xs font-bold">✕</button>
            </div>
            <button className="bg-[#0A1A2F] py-2 w-full rounded-full text-[10px] md:text-xs text-white font-medium">
              + Aggiungi Giocatore
            </button>
          </div>
        </div>
      </div>


      <UltimeNotizie heading="Ultime Notizie" headingcolor="#FF7A00" paragraph="Rimani aggiornato con le novità più importanti dal mondo del calcio: trasferimenti, risultati, curiosità e tanto altro in tempo reale." img1="/Frame 237883 (13).png" img2="/Frame 237883 (11).png" img3="/a46443266d890128c17885167521f18502a63998 (1).jpg" title1="Inzaghi all’Al-Hilal" title2="Serie A: Calendario 2024/25" title3="Colpo di Mercato del Milan" desc1="Simone Inzaghi lascia l’Inter per una nuova avventura in Arabia Saudita con un contratto da 10 milioni a stagione." desc2="Ufficializzate le date della prossima stagione: big match e derby già attesi dai tifosi." desc3="Arriva un nuovo attaccante internazionale per rinforzare il reparto offensivo rossonero." />
      <Footer />
    </div>
  )
}

export default Fantacalcio
