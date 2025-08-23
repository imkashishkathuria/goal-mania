import React from 'react'
import Homepage from './pages/Homepage'
import { Route, Router, Routes } from 'react-router-dom'
import ProductHomepage from './pages/ProductHomepage'
import ProductLandingPage from './pages/ProductLandingPage'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
    
        <Routes>
          <Route path='/' element={ <Homepage />} />
          <Route path='/product' element={<ProductHomepage />} />
          <Route path='/product/:id' element={<ProductLandingPage />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
 
     
    </div>
  )
}

export default App
