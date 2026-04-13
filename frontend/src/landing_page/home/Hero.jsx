import React from 'react'
import HeroImage from '../../assets/images/homeHero.png'

function Hero() {
  return (
    <div className='container'>
        <div className='row'>
            <img 
              src={HeroImage} 
              alt='Hero Image' 
              className='img-fluid' 
            />
        </div>

        <h1>Hero</h1>
    </div>
  )
}

export default Hero