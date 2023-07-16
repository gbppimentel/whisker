import React from "react";
import "./landing1.css";
import arrowRightFill from "./assets/svg/arrow-right-fill.svg";

const Landing1 = () => {
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
      >
        <div className="indicator-container">
          <div className="indicator indicator1"></div>
          <div className="indicator indicator2"></div>
          <div className="indicator indicator3"></div>
        </div>
        <div className="landing-text-1">
          explore paw-some connections at no cost.
        </div>
        <div className="landing-text-sub-1">
          help your feline find love without spending a penny and explore
          whisker with a free plan.
        </div>

        <img
          src={arrowRightFill}
          alt="Arrow Right Fill"
          style={{
            width: "51px",
            height: "51px",
            flexShrink: 0,
          }}
        />
      </div>
    </div>
  );
};

export default Landing1;
