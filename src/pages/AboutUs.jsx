import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="px-6 md:px-16 py-5 md:py-12 bg-white">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          {/* Text */}
          <div>
            <h3 className="text-[#FF7A00] text-[28px] text-center md:text-left md:font-extrabold mb-2">About Us</h3>
            <h2 className="text-2xl md:text-[40px] text-center md:text-left font-extrabold text-[#0A1A2F] mb-3">
              La tua dose quotidiana di calcio
            </h2>
            <p className="text-[#333333] font-bold text-[12px] md:text-[20px]">
              Il calcio raccontato con passione, ogni giorno.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="/image (1).png" // replace with actual image path
              alt="Football Stadium"
              className="w-full rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div>
            <img
              src="/image (3).png" // replace with actual image path
              alt="Goal Net"
              className="w-full rounded-xl shadow-md "
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-[40px] text-center md:text-left font-extrabold text-[#0A1A2F] mb-3">
              Chi Siamo
            </h2>
            <p className="text-[#0A1A2F] leading-relaxed text-center md:text-left text-[10px] md:text-[18px]">
              Goalmania nasce dalla passione per il calcio, con l’obiettivo di
              raccontarlo ogni giorno in modo veloce, chiaro e coinvolgente. Dalle
              breaking news di mercato alle storie delle leggende, dagli
              approfondimenti tattici ai momenti indimenticabili: tutto ciò che un
              tifoso vuole sapere lo trova qui.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mt-12 mb-12">
          {/* Text */}
          <div>

            <h2 className="text-2xl md:text-[40px] text-center md:text-left font-extrabold text-[#0A1A2F] mb-3">
              La Nostra Missione
            </h2>
            <p className="text-[#0A1A2F] leading-relaxed text-center md:text-left text-[10px] md:text-[20px]">
              Non siamo solo un sito di informazione: siamo una community in crescita, dove ogni contenuto è pensato per chi vive il calcio 24/7. Il nostro impegno è portarti il meglio del calcio, ovunque tu sia.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="/image (1).png" // replace with actual image path
              alt="Football Stadium"
              className="w-full rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 pb-3 md:py-12 text-center bg-white">
        {/* Heading */}
        <h2 className="hidden md:block text-2xl md:text-[40px] font-semibold text-[#FF7A00] mb-2">
          Ultime Notizie
        </h2>
        <h2 className="md:hidden text-2xl md:text-[40px] font-semibold text-[#FF7A00] mb-2">
         La Nostra Missione
        </h2>
        <p className="max-w-2xl mx-auto mb-3 md:mb-10 text-[#0A1A2F] leading-relaxed text-center md:text-left text-[12px] md:text-[20px]">
          Rimani aggiornato con le novità più importanti dal mondo del calcio:
          trasferimenti, risultati, curiosità e tanto altro in tempo reale.
        </p>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-3 md:gap-6 mb-6">
          {/* Card 1 */}
          <div className="bg-[#0B1A33] text-white py-5 md:py-10 rounded-3xl shadow-md flex items-center justify-center text-center">
            <p className='w-[200px] md:md:w-[300px] text-[12px] md:text-[18px]'>Notizie in tempo reale su trasferimenti, partite e curiosità.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0B1A33] text-white py-5 md:py-10 rounded-3xl shadow-md flex items-center justify-center text-center">
            <p className='w-[200px] md:md:w-[300px] text-[12px] md:text-[18px]'>Approfondimenti su tattiche, storie e leggende del calcio.</p>
          </div>
        </div>

        {/* Full-width Card */}
        <div className="bg-[#0B1A33] text-white py-5 md:py-10 rounded-3xl shadow-md flex items-center justify-center text-center">
          <p className='w-[200px] md:w-[500px] text-[12px] md:text-[18px]'>
            Shop esclusivo con maglie da calcio attuali e retrò, fedeli agli
            originali, a un prezzo unico di 35€.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
