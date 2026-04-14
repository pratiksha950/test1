import React from 'react'
import Hero from './Hero'
import Awards from './Awards'
import Education from './Education'
import Stats from './Stats'
import OpenAccount from '../OpenAccount'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Pricing from './Pricing'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Awards />
         <Stats />
         <Pricing />
        <Education />
       
        <OpenAccount />
        <Footer />
    </div>
  )
}

export default Home