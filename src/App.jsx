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

          <Route path="category/seriea" element={<SeriesA />} />
          <Route path="category/premier-league" element={<PremierLeague />} />
          <Route path="category/laliga" element={<LaLigaALMemento />} />
          <Route path='category/ligue1' element={<Ligue1 />} />

        </Routes>
    </div>
  )
}

export default App
