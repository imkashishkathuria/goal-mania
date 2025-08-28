import React from 'react'
import Header from '../components/Header'
import HomeHero from '../components/HomeHero'
import SerieAClubs from '../components/SerieAClubs'
import SceltiperTe from '../components/SceltiperTe'
import UltimeNotizie from '../components/UltimeNotizie'
import ProssimePartite from '../components/ProssimePartite'
import StorieinPrimoPiano from '../components/StorieinPrimoPiano'
import UltimeNotizie2 from '../components/UltimeNotizie2'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
      <Header />
      <HomeHero />
      <SerieAClubs />
      <SceltiperTe />
      <UltimeNotizie img1="/Frame 237883.png " img2="/Frame 237883 (1).png " img3="/9e9f636a4abf54d1438e0b68d45f7fe2fd3b75ab.jpg" heading="Ultime Notizie" paragraph="Rimani aggiornato con le novità più importanti dal mondo del calcio: trasferimenti, risultati, curiosità e tanto altro in tempo reale." headingcolor="#000000" title1="Inzaghi all’Al-Hilal" title2="Serie A: Calendario 2024/25" title3="Colpo di Mercato del Milan" desc1="Simone Inzaghi lascia l’Inter per una nuova avventura in Arabia Saudita con un contratto da 10 milioni a stagione." desc2="Ufficializzate le date della prossima stagione: big match e derby già attesi dai tifosi." desc3="Arriva un nuovo attaccante internazionale per rinforzare il reparto offensivo rossonero." />
      <ProssimePartite />
      <UltimeNotizie img1="/Frame 237883 (2).png " img2="/Frame 237883 (3).png " img3="/4504157350d6e5f3d2ffec113dd23de01818f69d (1).jpg" heading="Storie in Primo Piano" paragraph="Approfondimenti, interviste e articoli esclusivi che raccontano il calcio oltre il risultato." headingcolor="#000000" title1="Il Ritorno del Derby della Madonnina" title2="Giovani Talenti da Tenere d’Occhio" title3="Dietro le Quinte della Champions League" desc1="Un’analisi tattica e storica della sfida tra Inter e Milan." desc2="I prospetti che stanno conquistando la Serie A." desc3="Curiosità e retroscena del torneo più prestigioso d’Eu" />
      <UltimeNotizie2 />
      <Footer />
    </div>
  )
}

export default Homepage
