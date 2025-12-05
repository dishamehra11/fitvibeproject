import React from 'react'
import About from '../Components/About';
import { useNavigate } from 'react-router-dom';
import OurServices from '../Components/OurServices';
import LandingSection from '../Components/LandingSection';
import OurTeam from '../Components/OurTeam';
import InnerHappinessSection from '../Components/InnerHappinessSection';
import TestimonialSection from '../Components/TestimonialSection';
import Blogs from '../Components/Blogs';

function Home() {
  const Navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">YOUR WELLNESS JOURNEY</p>

          <div className="hero-title">
            <h1>
              Personalized Wellness <br /> for Real Results
            </h1>
          </div>

          <div>
            <button className="btn-primary" onClick={() => Navigate("/About")}>
              LEARN MORE →
            </button>
          </div>
        </div>
      </section>

      <About />
      <OurServices />
      <LandingSection />
      <OurTeam />
      <InnerHappinessSection />
      <TestimonialSection />
      <Blogs />
    </>
  );
}

export default Home;
