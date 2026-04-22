import React from 'react'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container">

   
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Zerodha Logo"
            style={{ width: "140px" }}
          />
        </Link>

     
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

    
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  )
}

export default Navbar