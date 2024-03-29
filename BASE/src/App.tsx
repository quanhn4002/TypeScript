import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import './App.css'
import Not from './pages/notfound'
import About from './pages/About'
import ChiTiet from './pages/Chitietsp'
const App = () => {
  return (
    <div>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop/:id' element={<ChiTiet />} />
          <Route path='*' element={<Not />} />
        </Routes>
      </>
    </div>
  )
}

export default App
