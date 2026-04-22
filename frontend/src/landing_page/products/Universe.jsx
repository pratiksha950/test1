import React from "react";

import smallcaselogo from "../../assets/images/smallcaselogo.png";
import streakLogo from "../../assets/images/streaklogo.png";
import sensibullLogo from "../../assets/images/sensibulllogo.svg";
import goldenpiLogo from "../../assets/images/goldenpiLogo.png"
import dittoLogo from "../../assets/images/dittologo.png";
import zerodhaFundHouse from "../../assets/images/zerodhaFundHouse.png";

function Universe() {
  return (
    <div style={{ padding: "80px 10%", textAlign: "center" }}>
      
      <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
        The Zerodha Universe
      </h2>

      <p
        style={{
          color: "#666",
          fontSize: "18px",
          marginBottom: "50px"
        }}
      >
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "50px",
          alignItems: "center"
        }}
      >

        <div>
          <img
            src={zerodhaFundHouse}
            alt="Zerodha Fund House"
            style={{ height: "50px", marginBottom: "15px" }}
          />

          <p style={{ color: "#777", fontSize: "14px" }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div>
          <img
            src={sensibullLogo}
            alt="Sensibull"
            style={{ height: "50px", marginBottom: "15px" }}
          />

          <p style={{ color: "#777", fontSize: "14px" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII,
            and more.
          </p>
        </div>

        <div>
          <img
            src={goldenpiLogo}
            alt="Tijori"
            style={{ height: "50px", marginBottom: "15px" }}
          />

          <p style={{ color: "#777", fontSize: "14px" }}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div>
          <img
            src={streakLogo}
            alt="Streak"
            style={{ height: "50px", marginBottom: "15px" }}
          />

          <p style={{ color: "#777", fontSize: "14px" }}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div>
          <img
            src={smallcaselogo}
            alt="Smallcase"
            style={{ height: "50px", marginBottom: "15px" }}
          />

          <p style={{ color: "#777", fontSize: "14px" }}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div>
          <img
            src={dittoLogo}
            alt="Ditto"
            style={{ height: "50px", marginBottom: "15px" }}
          />

          <p style={{ color: "#777", fontSize: "14px" }}>
            Personalized advice on life and health insurance. No spam and
            no mis-selling.
          </p>
        </div>

      </div>

      <div style={{ marginTop: "60px" }}>
        <button
          style={{
            backgroundColor: "#387ed1",
            color: "white",
            padding: "12px 28px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Sign up for free
        </button>
      </div>

    </div>
  );
}

export default Universe;