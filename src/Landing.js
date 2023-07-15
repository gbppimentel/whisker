import React from "react";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <div
        style={{
          width: "393px",
          height: "355px",
          flexShrink: 0,
          borderRadius: "44px 44px 0 0", // Individual values for each corner
          background: "#FFF",
          boxShadow: "0px -3px 20px 0px rgba(0, 0, 0, 0.10)",
          zIndex: 5,
        }}
      ></div>
    </div>
  );
};

export default Landing;
