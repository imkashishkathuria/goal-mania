import React from 'react'
import Homepage from './pages/Homepage'
import { Route, Router, Routes } from 'react-router-dom'
import ProductHomepage from './pages/ProductHomepage'
import ProductLandingPage from './pages/ProductLandingPage'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import SeriesA from './pages/SeriesA'

const App = () => {
  return (
    <div>
    
        <Routes>
          <Route path='/' element={ <Homepage />} />
          <Route path='/product' element={<ProductHomepage />} />
          <Route path='/product/:id' element={<ProductLandingPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/seriea" element={<SeriesA />} />
        </Routes>
 
     
    </div>
  )
}

export default App
