import React from "react";
import "./InnerHappinessSection.css";
import ex4 from "../images/ex4.jpg";

const InnerHappinessSection = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${ex4})` }}>
      
      <div className="overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <p className="tag">★ STAY HEALTHY</p>

        <h1 className="text-4xl font-bold text-white leading-tight mt-3">
          Yoga An Treat For Inner <br /> Happiness
        </h1>

        <p className="hero-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>

        <button className="hero-btn">LEARN MORE →</button>
      </div>
    </section>
  );
};

export default InnerHappinessSection;
