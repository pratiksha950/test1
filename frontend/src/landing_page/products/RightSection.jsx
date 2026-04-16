import React from "react";

function RightSection({
  imageSrc,
  title,
  description,
  trydemo,
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px 10%",
        gap: "40px"
      }}
    >
      
      <div style={{ flex: 1 }}>
        
        <h1
          style={{
            fontSize: "32px",
            marginBottom: "20px"
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            lineHeight: "1.6"
          }}
        >
          {description}
        </p>

        <div style={{ marginTop: "20px" }}>
          
          <a
            href={trydemo}
            style={{
              marginRight: "20px",
              color: "blue",
              textDecoration: "none"
            }}
          >
            Learn More →
          </a>

        </div>

      </div>

      <div style={{ flex: 1 }}>
        <img
          src={imageSrc}
          alt={title}
          style={{
            width: "80%",
            opacity: "0.9"
          }}
        />
      </div>

    </div>
  );
}

export default RightSection;