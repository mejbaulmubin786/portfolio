import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Experience from './components/experience/Experience'

const App = () => {
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <Navbar />
      <Home />
      <About />
      <Experience />
    </div>
  )
}

export default App