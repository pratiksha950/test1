import React from 'react'
import HeroImage from '../../assets/images/homeHero.png'

function Hero() {
  return (
    <div className='container p-5 mb-5'>
        <div className='row'>
            <img 
              src={HeroImage} 
              alt='Hero Image' 
              className='img-fluid mb-5 ' 
            />
           <div className='text-center'>
             <h1 className='mt-5'>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className='p-2 btn btn-primary' style={{width:"25%"}}>Sign Up For Free</button>
           </div>
        </div>

       
    </div>
  )
}

export default Hero