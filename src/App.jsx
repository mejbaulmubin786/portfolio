import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'

const App = () => {
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default App