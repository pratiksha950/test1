import React from 'react'
import Hero from './Hero'
import Awards from './awards'
import Education from './Education'
import Stats from './Stats'
import OpenAccount from '../OpenAccount'
import Navbar from '../Navbar'
import Footer from '../Footer'

function Home() {
  return (
    <div>Home
        <Navbar />
        <Hero />
        <Awards />
        <Education />
        <Stats />
        <OpenAccount />
        <Footer />
    </div>
  )
}

export default Home