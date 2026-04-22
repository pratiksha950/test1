import React from "react";
import googlePlay from "../../assets/images/googlePlayBadge.svg";
import appStore from "../../assets/images/appStoreBadge.svg"

function LeftSection({ imageSrc, title, description, trydemo, learnmore }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "80px 10%",
      gap: "40px"
    }}>
      
      <div style={{ flex: 1 }}>
        <img 
          src={imageSrc} 
          alt={title} 
          style={{ width: "80%", opacity: "0.9" }} 
        />
      </div>

      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
          {title}
        </h1>

        <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.6" }}>
          {description}
        </p>

        <div style={{ marginTop: "20px" }}>
          <a href={trydemo} style={{ marginRight: "20px", color: "blue" ,textDecoration: "none"}} >
            Try demo →
          </a>

          <a href={learnmore} style={{ color: "blue" ,textDecoration: "none"}} >
            Learn more →
          </a>
        </div>

        <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
          <img 
            src={googlePlay} 
            alt="Google Play"
            style={{ height: "40px" }}
          />
          <img 
            src={appStore} 
            alt="App Store"
            style={{ height: "40px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default LeftSection;