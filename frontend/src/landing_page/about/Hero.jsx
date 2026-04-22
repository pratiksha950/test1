import React from "react";

function Hero() {
  return (
    <div className="container mb-5" style={{ maxWidth: "1100px" }}>
      
      <div className="text-center mb-5 mt-5">
        <h1 className="fw-normal mb-5" style={{ fontSize: "28px", lineHeight: "1.6" }}>
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <hr className="mb-5 mt-5" />
      <div className="row text-muted" style={{ fontSize: "16px", lineHeight: "1.8" }}>
        
        <div className="col-md-6 mt-5 mb-5">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology.
          </p>

          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms.
          </p>
        </div>

        <div className="col-md-6 mt-5 mb-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p>
            <span style={{ color: "#387ed1", cursor: "pointer" }}>
              Rainmatter
            </span>{" "}
            , our fintech fund and incubator, has invested in several startups.
          </p>

          <p>
            Catch up on the latest updates on our{" "}
            <span style={{ color: "#387ed1", cursor: "pointer" }}>
              blog
            </span>{" "}
            or see what the media is{" "}
            <span style={{ color: "#387ed1", cursor: "pointer" }}>
              saying about us
            </span>
            .
          </p>
        </div>

      </div>
      <hr />
    </div>
  );
}

export default Hero;