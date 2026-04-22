import React from 'react'

function Pricing() {
  return (
    <div className='container mt-5'>

      <div className='row align-items-center'>

        <div className='col-md-5'>

          <h2 className='mb-4'>Unbeatable pricing</h2>

          <p className='text-muted'>
            We pioneered the concept of discount broking and price 
            transparency in India. Flat fees and no hidden charges.
          </p>

          <a 
            href="#" 
            style={{ textDecoration: "none", fontWeight: "500" }}
          >
            See pricing →
          </a>

        </div>

        <div className='col-md-7'>

          <div className='row text-center'>

            <div className='col-4'>
              <h1 
                style={{ 
                  color: "#f0a23a",
                  fontSize: "60px",
                  fontWeight: "600"
                }}
              >
                ₹0
              </h1>

              <p className='text-muted'>
                Free account <br />
                opening
              </p>
            </div>

            <div className='col-4'>
              <h1 
                style={{ 
                  color: "#f0a23a",
                  fontSize: "60px",
                  fontWeight: "600"
                }}
              >
                ₹0
              </h1>

              <p className='text-muted'>
                Free equity delivery <br />
                and direct mutual funds
              </p>
            </div>

            <div className='col-4'>
              <h1 
                style={{ 
                  color: "#f0a23a",
                  fontSize: "60px",
                  fontWeight: "600"
                }}
              >
                ₹20
              </h1>

              <p className='text-muted'>
                Intraday and F&O
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Pricing