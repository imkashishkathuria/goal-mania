import React from 'react'
import Homepage from './pages/Homepage'
import { Route, Router, Routes } from 'react-router-dom'
import ProductHomepage from './pages/ProductHomepage'

const App = () => {
  return (
    <div>
    
        <Routes>
          <Route path='/' element={ <Homepage />} />
          <Route path='/product' element={<ProductHomepage />} />
        </Routes>
 
     
    </div>
  )
}

export default App
