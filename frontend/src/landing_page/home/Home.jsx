import React from 'react'
import Hero from './Hero'
import Awards from './Awards'
import Education from './Education'
import Stats from './Stats'
import OpenAccount from '../OpenAccount'
import Pricing from './Pricing'

function Home() {
  return (
    <div>
       
        <Hero />
        <Awards />
         <Stats />
         <Pricing />
        <Education />
        <OpenAccount />
    </div>
  )
}

export default Home