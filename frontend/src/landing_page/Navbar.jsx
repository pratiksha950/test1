import React from 'react'
import logo from '../assets/images/logo.svg'

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Zerodha Logo"
            style={{ width: "140px" }}
          />
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link" href="#">
                Sign Up
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Support
              </a>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  )
}

export default Navbar