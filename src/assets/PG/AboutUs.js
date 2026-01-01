import React from 'react';
import { Link } from 'react-router-dom';
import About from '../Components/About';
import OurTeam from '../Components/OurTeam';
import TestimonialSection from '../Components/TestimonialSection';

function AboutUs() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">About Us</h1>

          <nav className="breadcrumb-nav">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active">About Us</li>
            </ul>
          </nav>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <About />
      <OurTeam />
      <TestimonialSection />
    </>
  );
}

export default AboutUs;
