import React from "react";
import NithinImage from "../../assets/images/nithinKamath.jpg";

function Team() {
  return (
    <div className="container mt-5 mb-5" style={{ maxWidth: "1100px" }}>
      
      <h3 className="text-center mb-5">People</h3>

      <div className="row align-items-center">
        
        <div className="col-md-5 text-center">
          <img
            src={NithinImage}
            alt="Nithin Kamath"
            className="img-fluid mb-3"
            style={{
              borderRadius: "100%",
              width: "250px",
              height: "250px",
              objectFit: "cover",
            }}
          />

          <h5 className="mt-3">Nithin Kamath</h5>
          <p className="text-muted">Founder, CEO</p>
        </div>

        <div
          className="col-md-7 text-muted"
          style={{ lineHeight: "1.8", fontSize: "16px" }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <span style={{ color: "#387ed1", cursor: "pointer" }}>
              <a href=" "  style={{ textDecoration: "none"} }>Homepage</a>
            </span>{" "}
            /{" "}
            <span style={{ color: "#387ed1", cursor: "pointer" }}>
              <a href=" " style={{ textDecoration: "none"} }>Trending QnA</a>
            </span>{" "}
            /{" "}
            <span style={{ color: "#387ed1", cursor: "pointer" }}>
              <a href=" " style={{ textDecoration: "none"} }>Twitter</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;