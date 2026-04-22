import React from "react";
import logo from "../assets/images/logo.svg";

function Footer() {
  return (
    <footer style={{ background: "#fafafa" }} className="pt-5 pb-4">
      <div className="container" style={{ maxWidth: "1200px" }}>

        <div className="row gx-4">

          <div className="col-md-3">
            <img src={logo} alt="Zerodha" style={{ width: "150px" }} className="mb-3" />

            <p className="text-muted small">
              © 2010 - 2026, Zerodha Broking Ltd.
              <br />All rights reserved.
            </p>

            <div className="d-flex gap-3 mt-3 text-muted">
             <i class="fa-brands fa-square-instagram"></i>
              <i class="fa-brands fa-square-x-twitter"></i>
              <i class="fa-brands fa-facebook"></i> 
              <i class="fa-brands fa-linkedin"></i>
            </div>

            <hr />

            <div className="d-flex gap-3 text-muted">
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-square-whatsapp"></i>  
              <i class="fa-brands fa-telegram"></i>
            </div>
          </div>

          <div className="col-md-2">
            <h6 className="fw-bold mb-3">Account</h6>
            <ul className="list-unstyled text-muted small">
              <li>Open demat account</li>
              <li>Minor demat account</li>
              <li>NRI demat account</li>
              <li>HUF demat account</li>
              <li>Commodity</li>
              <li>Dematerialisation</li>
              <li>Fund transfer</li>
              <li>MTF</li>
            </ul>
          </div>

          <div className="col-md-2">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled text-muted small">
              <li>Contact us</li>
              <li>Support portal</li>
              <li>How to file a complaint?</li>
              <li>Status of complaints</li>
              <li>Bulletin</li>
              <li>Circular</li>
              <li>Z-Connect blog</li>
              <li>Downloads</li>
            </ul>
          </div>

          <div className="col-md-2">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled text-muted small">
              <li>About</li>
              <li>Philosophy</li>
              <li>Press & media</li>
              <li>Careers</li>
              <li>Zerodha Cares (CSR)</li>
              <li>Zerodha.tech</li>
              <li>Open source</li>
              <li>Referral program</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Quick links</h6>
            <ul className="list-unstyled text-muted small">
              <li>Upcoming IPOs</li>
              <li>Brokerage charges</li>
              <li>Market holidays</li>
              <li>Economic calendar</li>
              <li>Calculators</li>
              <li>Markets</li>
              <li>Sectors</li>
              <li>Gift Nifty</li>
            </ul>
          </div>
        </div>

        <div className="mt-5 pt-4 border-top text-muted small" style={{ lineHeight: "1.6" }}>

          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI — SEBI Registration no.: INZ000031633.
            CDSL/NSDL: Depository services through Zerodha Broking Ltd. — SEBI Registration no.: IN-DP-431-2019.
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, JP Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
            For complaints write to <span className="text-primary">complaints@zerodha.com</span>,
            for DP related issues write to <span className="text-primary">dp@zerodha.com</span>.
          </p>

          <p>
            Procedure to file a complaint on <span className="text-primary">SEBI SCORES</span>:
            Register on SCORES portal. Mandatory details include Name, PAN, Address,
            Mobile Number and Email ID. Benefits include effective communication and faster resolution.
          </p>

          <p>
            <span className="text-primary">Smart Online Dispute Resolution</span> |
            <span className="text-primary"> Grievances Redressal Mechanism</span>
          </p>

          <p>
            Investments in securities market are subject to market risks;
            read all related documents carefully before investing.
          </p>

          <p>
            Attention investors:
            1) Stock brokers can accept securities as margin only via pledge system w.e.f September 2020.
            2) Update your email/mobile with broker to receive OTP.
            3) Check holdings via consolidated account statement issued by NSDL/CDSL.
          </p>

          <p>
            India's largest broker based on network as per NSE.
            <span className="text-primary"> NSE broker factsheet</span>
          </p>

          <p>
            Prevent unauthorised transactions in your account.
            Update your mobile/email regularly.
            KYC is a one-time process done through SEBI registered intermediaries.
          </p>

          <p>
            If subscribing to IPO, no need to issue cheque.
            Funds remain in your bank account.
            We do not give stock tips or authorize trading on behalf of others.
          </p>

          <p>
            Fixed deposit products are third-party products and not exchange traded.
            Zerodha acts only as distributor.
            These are regulated by RBI.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-3">
            <span>NSE</span>
            <span>BSE</span>
            <span>MCX</span>
            <span>Terms & conditions</span>
            <span>Policies & procedures</span>
            <span>Privacy policy</span>
            <span>Disclosure</span>
            <span>Investor charter</span>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;