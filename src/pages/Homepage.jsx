import React from 'react'
import Herosection from '../components/Herosection'
import About from '../components/About'
import Creed from '../components/Creed'
import Stats from '../components/Stats'
import Services from '../components/Services'
import CTA from '../components/CTA'

const Homepage = () => {
  return (
    <div>
      <Herosection />
      <Stats />
      <About />
      <Creed />
      <Services />
      <CTA />
    </div>
  )
}

export default Homepage
