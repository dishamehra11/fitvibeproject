import React from 'react'
import { IoStarSharp } from "react-icons/io5";

function Home() {
  return (
    <section className="hero">

      {/* LEFT SIDE CONTENT */}
      <div className="hero-content">
        <p className="hero-subtitle">YOUR WELLNESS JOURNEY</p>

        <h1 class="hero-title">
          Personalized Wellness <br></br>for Real Results
        </h1>
        <a href="about us" className="btn-primary">LEARN MORE</a>
        <span className="rating-box"><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /> 4.5 | 765+ REVIEWS</span>
      </div>

      {/* LEFT CORNER GYM BOX */}
      <div className="gym-box">
        <h3>Find a Gym <br /> Near You</h3>
      </div>

    </section>
  )
}

export default Home
