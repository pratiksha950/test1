import React from "react";
import logo from "../assets/images/logo.svg";

function Footer() {
  return (
    <footer style={{ background: "#fafafa" }} className="pt-5 pb-4">
      <div className="container" style={{ maxWidth: "1200px" }}>
        
        <div className="row gx-4">

          {/* Logo + Social */}
          <div className="col-md-3">
            <img
              src={logo}
              alt="Zerodha"
              style={{ width: "150px" }}
              className="mb-3"
            />

            <p className="text-muted small">
              © 2010 - 2026, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            <div className="d-flex gap-3 mt-3 text-muted">
              <i className="bi bi-twitter"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>
            </div>

            <hr />

            <div className="d-flex gap-3 text-muted">
              <i className="bi bi-youtube"></i>
              <i className="bi bi-whatsapp"></i>
              <i className="bi bi-telegram"></i>
            </div>
          </div>

          {/* Account */}
          <div className="col-md-2">
            <h6 className="fw-bold mb-3">Account</h6>
            <ul className="list-unstyled text-muted small">
              <li className="mb-4">Open demat account</li>
              <li className="mb-4">Minor demat account</li>
              <li className="mb-4">NRI demat account</li>
              <li className="mb-4">HUF demat account</li>
              <li className="mb-4">Commodity</li>
              <li className="mb-4">Dematerialisation</li>
              <li className="mb-4">Fund transfer</li>
              <li className="mb-4">MTF</li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-2">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled text-muted small">
              <li className="mb-4">Contact us</li>
              <li className="mb-4">Support portal</li>
              <li className="mb-4">How to file a complaint?</li>
              <li className="mb-4">Status of your complaints</li>
              <li className="mb-4">Bulletin</li>
              <li className="mb-4">Circular</li>
              <li className="mb-4">Z-Connect blog</li>
              <li className="mb-4">Downloads</li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-2">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled text-muted small">
              <li className="mb-4">About</li>
              <li className="mb-4">Philosophy</li>
              <li className="mb-4">Press & media</li>
              <li className="mb-4">Careers</li>
              <li className="mb-4">Zerodha Cares (CSR)</li>
              <li className="mb-4">Zerodha.tech</li>
              <li className="mb-4">Open source</li>
              <li className="mb-4">Referral program</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Quick links</h6>
            <ul className="list-unstyled text-muted small">
              <li className="mb-4">Upcoming IPOs</li>
              <li className="mb-4">Brokerage charges</li>
              <li className="mb-4">Market holidays</li>
              <li className="mb-4">Economic calendar</li>
              <li className="mb-4">Calculators</li>
              <li className="mb-4">Markets</li>
              <li className="mb-4">Sectors</li>
              <li className="mb-4">Gift Nifty</li>
            </ul>
          </div>

        </div>

        <div className="mt-4 pt-3 border-top text-muted small">
          Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI — SEBI Registration no.: INZ000031633 |
          CDSL/NSDL: Depository services through Zerodha Broking Ltd. — SEBI Registration no.: IN-DP-431-2019
        </div>

      </div>
    </footer>
  );
}

export default Footer;