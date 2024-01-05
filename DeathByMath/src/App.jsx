import { useState } from 'react'

import './App.css'
import Nav from './components/Nav'
import DifferentialGeometry from './pages/DifferentialGeometry'
import Main from './pages/Main'
import FunctionalAnalysis from './pages/functionalAnalysis'
import { Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />

    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/DiffGeo' element={<DifferentialGeometry />} />
      <Route path='/Funanal' element={<FunctionalAnalysis />} />
    </Routes>
    Hello World!
    </>
  )
}

export default App
