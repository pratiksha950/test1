import React from 'react'
import educationImg from '../../assets/images/education.svg'

function Education() {
  return (
    <div className='container mt-5 mb-5'>

      <div className='row align-items-center mb-5'>

        <div className='col-md-6'>

          <img 
            src={educationImg} 
            alt="Education" 
            className='img-fluid'
            style={{ maxWidth: "90%" }}
          />

        </div>

        <div className='col-md-6'>

          <h3 className='mb-4'>
            Free and open market education
          </h3>

          <p className='text-muted'>
            Varsity, the largest online stock market education book in the world 
            covering everything from the basics to advanced trading.
          </p>

          <a 
            href="#" 
            style={{ textDecoration: "none", fontWeight: "500" }}
          >
            Varsity →
          </a>

          <p className='text-muted mt-4'>
            TradingQ&A, the most active trading and investment community in 
            India for all your market related queries.
          </p>

          <a 
            href="#" 
            style={{ textDecoration: "none", fontWeight: "500" }}
          >
            TradingQ&A →
          </a>

        </div>

      </div>

    </div>
  )
}

export default Education