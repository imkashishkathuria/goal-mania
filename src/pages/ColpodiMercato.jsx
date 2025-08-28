import React, { useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeSections from '../components/HomeSections'
import UltimeNotizie from '../components/UltimeNotizie'

const ColpodiMercato = () => {
 
    
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

            <UltimeNotizie img1="/Frame 237883 (13).png" img2="/Frame 237883 (14).png" img3="/Frame 237883 (14).png" heading=" Tonali al Newcastle: Colpo da Record" paragraph="Il centrocampista lascia il Milan per 70 milioni, approdando in Premier League." title1="Chiesa rinnova con la Juventus" title2="Scamacca torna in Italia" title3="Osimhen verso la Ligue 1" desc1="Federico Chiesa firma il rinnovo con la Juventus fino al 2028, respingendo le offerte di diversi club europei." desc2="Dopo l’esperienza in Premier League con il West Ham, Gianluca Scamacca firma con l’Atalanta per 25 milioni di euro." desc3="Victor Osimhen, capocannoniere della Serie A, vicino a un trasferimento al Marsiglia." headingcolor="#FF7A00" />
            <Footer />
        </div>
    )
}

export default ColpodiMercato
