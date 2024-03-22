import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Notfound from './pages/Notfound'
import Chitiet from './pages/Chitiet'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='/product/:id' element={<Chitiet />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
