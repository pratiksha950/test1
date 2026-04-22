import React from 'react'
import largestBrokerImg from '../../assets/images/largestBroker.svg'
import presslogo from '../../assets/images/pressLogos.png'

function Awards() {
  return (
    <div className='container mt-5 mb-5'>
      <div className='row align-items-center'>
        
        <div className='col-md-6'>
          <img 
            src={largestBrokerImg} 
            alt='Awards' 
            className='img-fluid'
          />
        </div>

        <div className='col-md-6'>
          <h2>Largest stock broker in India</h2>

          <p className='text-muted'>
            2+ million Zerodha clients contribute to over 15% of all retail 
            order volumes in India daily by trading and investing in:
          </p>

          <div className='row'>
            
            <div className='col-6 p-3'>
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className='col-6 p-3'>
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. securities</li>
              </ul>
              
            </div>
            <img 
                src={presslogo} 
                alt='Press Logo' 
                className='img-fluid mt-3'
              />
             

          </div>
        </div>

      </div>
    </div>
  )
}

export default Awards