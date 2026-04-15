import React from 'react'
import Section1 from './page/Section1'
import HeroSection from './Components/HeroSection'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div className='min-h-screen w-full overflow-x-hidden  box-border'>
      
      <Section1 />
      <HeroSection />
      <Footer />
    </div>
  )
}

export default App