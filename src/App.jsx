import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/home/Home'

const App = () => {
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App