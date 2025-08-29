import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MystryBox = () => {
  const backgrounds = [
    "/image-bg.png",
    "/Group 237889.png",
    "/Group 237891.png",
  ];

  return (
    <div>
      <Header />
      {/* Top Banner */}
      <div className="my-3 flex justify-center items-center">
        <span className="bg-[#FF7A00] text-[#0A1A2F] text-[11px] md:text-[20px] font-medium px-2 md:px-4 py-1 rounded-full">
          Squadre Top del Momento
        </span>
        <span className="ml-2 font-bold text-[11px] md:text-[20px] text-[#000000]">per le prossime 24 ore</span>
      </div>
      <div className="text-center text-white" >


        {/* Heading */}
        <div className='py-8' style={{ backgroundImage: "url('/Rectangle 109 (1).png')" }}>
          <h2 className="text-2xl md:text-5xl font-extrabold mb-3">
            Scatola Misteriosa <span className="hidden md:inline-flex items-center "><img src='/Group 237886.png' /></span>
          </h2>
          <p className="text-gray-300 font-[10px] md:font-[20px] max-w-2xl mx-auto mb-15">
            Scopri la magia delle nostre scatole misteriose! Ogni scatola contiene
            una maglia a sorpresa delle migliori squadre italiane e internazionali.
          </p>

          {/* Features */}
          <div className="flex justify-between px-2 md:px-70 mt-5 md:mb-12">
            <div className="flex flex-col items-center">
              <img src="/30377-NXWVEE 1.png" alt="Maglia a Sorpresa" className="md:h-20 h-15 mt-9 md:mt-0 mb-3" />
              <p className="font-bold text-[12px] md:text-[20px]">Maglia a Sorpresa</p>
            </div>
            <div className="flex flex-col items-center -mt-10 md:mt-0">
              <img src="/image 15.png" alt="Squadre Top" className="md:h-20 h-15  mb-3" />
              <p className="font-bold text-[12px] md:text-[20px]">Squadre Top</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/Group 237888 - Copy.png" alt="Spedizione Gratuita" className="md:h-20 h-15 mt-9 md:mt-0 mb-3" />
              <p className="font-bold text-[12px] md:text-[20px]">Spedizione Gratuita</p>
            </div>
          </div>
        </div>

        <div className='py-15' style={{ backgroundImage: "url('/Rectangle 729.png')" }}>
          {/* Middle Heading */}
          <h3 className="hidden md:block text-3xl font-extrabold mb-4 mx-auto w-[600px]">
            Scegli la tua scatola misteriosa e scopri maglie premium uniche!
          </h3>
           <h3 className="md:hidden text-3xl font-extrabold mb-4 mx-auto">
           La Nostra Missione
          </h3>
          <p className="text-gray-300 text-[12px] md:text-[20px] max-w-3xl mx-auto md:mb-10 md:w-[600px]">
            Scegli la tua scatola misteriosa e preparati per una sorpresa
            emozionante! Ogni scatola è unica e contiene maglie di qualità premium.
          </p>

          {/* Boxes */}
          <div className="flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-8">
            {backgrounds.map((bg, i) => (
              <div
                key={i}
                className="flex flex-col items-center md:py-8 bg-center bg-no-repeat bg-contain rounded-2xl"
                style={{ backgroundImage: `url('${bg}')` }}
              >
                <img
                  src="/3361748_500935-PHXIUI-730 1.png"
                  alt={`Scatola Misteriosa ${i + 1}`}
                  className="h-40 w-40 object-contain mb-4"
                />
                <button className="bg-[#FF7A00] text-[#0A1A2F] text-md px-10 py-2 mt-10 rounded-full font-bold hover:bg-orange-600 transition">
                  Add to cart →
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div>
        {/* Top Dark Section */}
        <div className="bg-[#0F1B2D] text-white py-5 md:py-17 px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl  font-bold mb-2">Come Funziona</h2>
            <p className="text-gray-300 text-[12px] md:text-[20px] max-w-2xl mx-auto ">
              Il processo è semplice e divertente! Ecco come funziona la nostra scatola misteriosa.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-10 md:px-40 md:text-left">
            {/* Step 1 */}
            <div className='flex gap-2 items-center'>
              <div>
              <h3 className="text-orange-500 text-center font-bold text-lg mb-2">
                Scegli la Scatola
              </h3>
              <p className="text-gray-300 text-sm">
                Seleziona la scatola misteriosa che preferisci e aggiungila al carrello.
              </p>
            </div>
            <img src='/guidance_up-arrow.png' className='hidden md:block' />
            </div>
            

            {/* Step 2 */}
            <div className='flex gap-2 items-center'>
            <div>
              <h3 className="text-orange-500 font-bold text-lg mb-2">
                Escludi le Maglie
              </h3>
              <p className="text-gray-300 text-sm">
                Puoi escludere fino a 5 maglie che non vuoi ricevere nella tua scatola.
              </p>
            </div>
             <img src='/guidance_up-arrow.png' className='hidden md:block'  />
            </div>

            {/* Step 3 */}
            <div>
              <h3 className="text-orange-500 font-bold text-lg mb-2">
                Ricevi la Sorpresa
              </h3>
              <p className="text-gray-300 text-sm">
                Ricevi la tua scatola misteriosa con una maglia a sorpresa di qualità premium!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom White Section */}
        <div className="hidden md:block bg-white text-center py-12 px-6">
          <h3 className="text-xl md:text-2xl text-[#0F1B2D] font-extrabold mb-3">
            Pronto per l'Avventura?
          </h3>
          <p className="text-[#0A1A2F] mb-6 max-w-2xl mx-auto">
            Unisciti a migliaia di clienti che hanno già scoperto la magia delle nostre scatole misteriose!
          </p>
          <button className="bg-orange-500 text[-#0A1A2F] px-6 py-3 rounded-full font-bold">
            Esplora Tutti i Prodotti →
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MystryBox
