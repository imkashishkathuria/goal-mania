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
      <UltimeNotizie img1="/Frame 237883.png " img2="/Frame 237883 (1).png " img3="/9e9f636a4abf54d1438e0b68d45f7fe2fd3b75ab.jpg" />
      <ProssimePartite />
      <StorieinPrimoPiano />
      <UltimeNotizie2 />
      <Footer />
    </div>
  )
}

export default Homepage
