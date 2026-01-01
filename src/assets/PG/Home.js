import React from "react";
import { useNavigate } from "react-router-dom";

import About from "../Components/About";
import OurServices from "../Components/OurServices";
import LandingSection from "../Components/LandingSection";
import OurTeam from "../Components/OurTeam";
import InnerHappinessSection from "../Components/InnerHappinessSection";
import TestimonialSection from "../Components/TestimonialSection";
import Blogs from "../Components/Blogs";

function Home() {
  const navigate = useNavigate();

  // ✅ GET STARTED BUTTON LOGIC
  const handleGetStarted = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    // 🔹 No registered users → Register page
    if (users.length === 0) {
      navigate("/register");
      return;
    }

    // 🔹 Users exist but not logged in → Login page
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    // 🔹 Logged in → Home (stay)
    navigate("/");
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero2">
        <div>
          <p className="hero-subtitle">YOUR WELLNESS JOURNEY</p>

          <div className="hero-title">
            <h1>
              Personalized Wellness <br /> for Real Results
            </h1>
          </div>

          <button className="btn-primary" onClick={handleGetStarted}>
            GET STARTED →
          </button>
        </div>
      </section>

      {/* MAIN CONTENT */}
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
