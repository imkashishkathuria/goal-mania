import React, { useState } from 'react'

const FAQs = () => {

    const tabs = ["Generale", "Costruzione", "Assistenza", "Legale"];
      const [activeTab, setActiveTab] = useState("Generale");
    
      const faqs = {
        Generale: [
          {
            q: "Q1. Dopo Quanto Arriva?",
            a: "La tua attesa sarà breve! Solitamente impiega tra i 10-14 giorni per arrivare a casa tua. Puoi controllare lo stato del tuo ordine nella sezione 'Traccia il tuo ordine'!",
          },
          {
            q: "Q2. I Pagamenti Sono Sicuri?",
            a: "Assolutamente. La sicurezza dei tuoi pagamenti è la nostra massima priorità. Utilizziamo sistemi di pagamento sicuri e affidabili per garantire una transazione senza preoccupazioni.",
          },
          {
            q: "Q3. Che Metodi di Pagamento Accettate?",
            a: "Gli acquisti sul nostro sito possono essere effettuati tramite: Visa, Mastercard, American Express, Mestro e PayPal. Non accettiamo pagamenti in contanti, tramite assegno, contrassegno o bonifico bancario. Ogni acquisto avviene nella massima sicurezza per proteggere i tuoi dati personali e le informazioni sulla tua carta di credito da accessi non autorizzati.",
          },
        ],
        Costruzione: [
          { q: "Q1. Domanda Costruzione", a: "Risposta costruzione..." },
        ],
        Assistenza: [
          { q: "Q1. Domanda Assistenza", a: "Risposta assistenza..." },
        ],
        Legale: [{ q: "Q1. Domanda Legale", a: "Risposta legale..." }],
      };
    

  return (
    <div>
      <div>
        

        
      <div className='bg-[#0A1A2F] py-4 hidden md:flex justify-center'>

       
        <h1 className='text-[30px] text-[#FFEFE5] font-bold'>
          Domande frequenti
        </h1>
      </div>

      <div className="bg-[#F0F0F0] md:px-6 md:py-3">
        <div className='md:hidden '>
          <img src='/Group 237882.png' className='w-full object-contain' />
         

        </div>
        

        {/* Tabs */}
        <div className="hidden md:flex justify-center space-x-6 border-b border-gray-300 mb-8">
           
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-lg font-extrabold cursor-pointer ${activeTab === tab
                  ? "border-b-2 border-[#333333] text-[#333333]"
                  : "text-[#333333] hover:[#333333]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="max-w-3xl mx-auto space-y-6 py-4 px-7">
          {faqs[activeTab].map((item, index) => (
            <div key={index} className='border-b-2 border-white md:border-none md:pb-0 pb-4'>
              <h3 className="font-bold md:font-semibold text-[#0A1A2F] text-[20px]">{item.q}</h3>
              <p className="text-[#333333] mt-1 text-[13px] md:text-[18px]">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default FAQs
