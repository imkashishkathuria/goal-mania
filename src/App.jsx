import React from 'react'
import Homepage from './pages/Homepage'
import { Route, Router, Routes } from 'react-router-dom'
import ProductHomepage from './pages/ProductHomepage'
import ProductLandingPage from './pages/ProductLandingPage'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import SeriesA from './pages/SeriesA'
import PremierLeague from './pages/PremierLeague'
import LaLigaALMemento from './pages/LaLigaALMemento'
import Ligue1 from './pages/Ligue1'
import SignupOtp from './pages/SignupOtp'
import PopupV1 from './pages/PopupV1'
import PopupV2 from './pages/PopupV2'
import ChampionsLeague from './pages/ChampionsLeague'
import ColpodiMercato from './pages/ColpodiMercato'
import Articles from './pages/Articles'
import AboutUs from './pages/AboutUs'
import Fantacalcio from './pages/Fantacalcio'
import MystryBox from './pages/MystryBox'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={ <Homepage />} />
          <Route path='/product' element={<ProductHomepage />} />
          <Route path='/product/:id' element={<ProductLandingPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/login-otp' element={<SignupOtp />} />
          <Route path='/popup-one' element={<PopupV1 />} />
          <Route path='/popup-two' element={<PopupV2 />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/error' element={<ErrorPage />} />
          <Route path='/about' element={<AboutUs />} />
           <Route path='/mystry-box' element={<MystryBox />} />

          <Route path="category/seriea" element={<SeriesA />} />
          <Route path="category/premier-league" element={<PremierLeague />} />
          <Route path="category/laliga" element={<LaLigaALMemento />} />
          <Route path='category/ligue1' element={<Ligue1 />} />
          <Route path='category/champions-league' element={<ChampionsLeague />} />
          <Route path='category/colpo-di-mercato' element={<ColpodiMercato />} />
          <Route path='category/fantacalcio' element={<Fantacalcio />} />
          

        </Routes>
    </div>
  )
}

export default App
