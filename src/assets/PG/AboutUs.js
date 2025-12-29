import React from 'react'
import About from '../Components/About'
import OurTeam from '../Components/OurTeam'
import TestimonialSection from '../Components/TestimonialSection'
import { Link } from 'react-router-dom';

function AboutUs() {

  return (
    <>

      <section
        className="about-hero">
        <div className="overlay"></div>

        <div className="hero-content" >
          <h1>About Us</h1>

          <nav className='d-block'>
            <ul className='breadcrumb'>
              <li className='breadcrumb-item'><Link to="/">Home</Link></li>
              <li className='breadcrumb-item'>About us</li>
            </ul>
          </nav>
        </div >
      </section >

      < About />
      <OurTeam />
      <TestimonialSection />
    </>
  )
}

export default AboutUs
