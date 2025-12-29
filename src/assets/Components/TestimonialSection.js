import React from "react";
import "./TestimonialSection.css";

import testimonial from "../images/testimonial.webp";       //  main yoga girl image
// import badge from "../images/badge.png";     // the round icon
import girl from "../images/girl.png";       // your small review user image

const TestimonialSection = () => {
  return (
    <section className="testimonial">
      {/* <div className="e-con-inner"> */}
      {/* LEFT TEXT SECTION */}
      <div className="left">
        <p className="testi-tag">● TESTIMONIAL</p>

        <h2 className="testi-title">
          Real Reviews from Our Yoga <br /> Family and Clients
        </h2>

        <div className="rating-row">
          <img src={girl} alt="" className="user-img" />
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <span className="rating-text"><b>100,000 FIVE STAR RATING</b></span>
        </div>

        <p className="testi-desc">
          I had always taken my vision for granted until I started noticing
          things getting blurry over the years. At first, I thought it was just
          part of getting older, but I soon realized it was affecting my daily
          life. I was struggling to read, drive at night, and even see…
        </p>

        <p className="reviewer">Foster Emily</p>
        <p className="position">Customer</p>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="right">
        <div className="i1">
        <img src={testimonial} className="testimonial" alt="ex" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
