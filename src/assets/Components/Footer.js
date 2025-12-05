import React from "react";
import "./Footer.css";
import logowhite from '../images/logowhite.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <h2 className="logo">
            {/* <span className="fit">FiT</span>V<span className="ibe">iBE</span> */}
            <img src={logowhite} alt="logo" className="header-logo"/>
           
          </h2>
          <p className="footer-text">
            Are you ready to take your fitness to the next level?
            With the FitVibe Newsletter, you'll get exclusive access
            to expert workout routines, cutting-edge nutrition tips,
            and motivational.
          </p>

          <div className="footer-contact">
            <div>
              <h4>Call Us</h4>
              <p>+ (528) 456-7592</p>
            </div>
            <div>
              <h4>Email Us</h4>
              <p>example@fitvibe.com</p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li>Group Fitness</li>
            <li>Lifestyle Coaching</li>
            <li>Mental Wellness</li>
            <li>Nutrition Coaching</li>
            <li>Personal Training</li>
            <li>Recovery & Regeneration</li>
          </ul>
        </div>

        {/* Quicklinks */}
        <div className="footer-col">
          <h3>Quicklinks</h3>
          <ul>
            <li>About Us</li>
            <li>Testimonial</li>
            <li>Our Team</li>
            <li>Latest Articles</li>
            <li>Refund & Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <h3>Newsletter</h3>
          <p>
            Your fitness journey deserves more than
            just motivation—it needs the right tools,
            expert guidance, and a supportive
            community to help you succeed!
          </p>

          <div className="newsletter-box">
            <input type="email" placeholder="Email Address" />
            <button>➤</button>
          </div>

          {/* <span className="error-msg">Must Fill Required Details.</span> */}
        </div>
      </div>

      <div className="footer-bottom">
        © Copyright 2025. All rights reserved Fitvibe.
        Designed by Zozothemes
      </div>
    </footer>
  );
};

export default Footer;

