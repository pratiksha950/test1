import React from "react";
import pricingEquity from "../../assets/images/pricingEquity.svg";
import pricingMF from "../../assets/images/pricingMF.svg";
import intradayTrades from "../../assets/images/intradayTrades.svg";

function Hero() {
  return (
    <div style={{ padding: "80px 10%", textAlign: "center" }}>

      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        Charges
      </h1>

      <p
        style={{
          fontSize: "18px",
          color: "#777",
          marginBottom: "60px"
        }}
      >
        List of all charges and taxes
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "40px"
        }}
      >

        <div style={{ flex: 1 }}>
          <img
            src={pricingEquity}
            alt="Equity Pricing"
            style={{ height: "120px" }}
          />

          <h3>Free equity delivery</h3>

          <p style={{ color: "#777" }}>
            All equity delivery investments (NSE, BSE), are absolutely free —
            ₹ 0 brokerage.
          </p>
        </div>

        <div style={{ flex: 1 }}>
          <img
            src={intradayTrades}
            alt="Intraday Pricing"
            style={{ height: "120px" }}
          />

          <h3>Intraday and F&O trades</h3>

          <p style={{ color: "#777" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>

        <div style={{ flex: 1 }}>
          <img
            src={pricingMF}
            alt="MF Pricing"
            style={{ height: "120px" }}
          />

          <h3>Free direct MF</h3>

          <p style={{ color: "#777" }}>
            All direct mutual fund investments are absolutely free —
            ₹ 0 commissions & DP charges.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Hero;