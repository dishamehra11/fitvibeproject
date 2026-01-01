import React from "react";
import { Link } from "react-router-dom";

// Correct Image Imports
import ExImage from "../images/ex1.jpg";
import WorkoutImage from "../images/Workout.jpg";
import ExImage3 from "../images/ex3.webp";

import "../Components/OurServices.css"; // <-- your CSS

function Ourservices() {
    return (
        <>
            {/* HERO SECTION */}
            <section className="service-hero">
                <div className="overlay"></div>

                <div className="container hero-content">
                    <h1 className="hero-title">Our Services</h1>

                    <nav className="breadcrumb-nav">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active">Our Services</li>
                        </ul>
                    </nav>
                </div>
            </section>

            {/* MAIN SERVICES SECTION */}
            <section className="services-section">
                <div className="container services-container">

                    {/* Top Row */}
                    <div className="top-wrapper">
                        <div className="left-box">
                            <p className="small-heading">OUR SERVICES</p>
                            <h1 className="main-title">
                                Transform Your Body, Soothe Your <br /> Soul with Yoga
                            </h1>
                        </div>
                    </div>

                    {/* 3 + 3 GRID */}
                    <div className="services-grid-2row">

                        {/* ROW 1 */}
                        <div className="row">
                            <div className="service-card">
                                <img src={ExImage} alt="Lifestyle Coaching" />
                                <h3>Lifestyle Coaching</h3>
                                <p>Work out anytime..</p>
                            </div>

                            <div className="service-card">
                                <img src={WorkoutImage} alt="Recovery & Regeneration" />
                                <h3>Recovery & Regeneration</h3>
                                <p>Improve flexibility...</p>
                            </div>

                            <div className="service-card">
                                <img src={ExImage3} alt="Mental Wellness" />
                                <h3>Mental Wellness</h3>
                                <p>Calm your mind...</p>
                            </div>
                        </div>

                        {/* ROW 2 */}
                        <div className="row">
                            <div className="service-card">
                                <img src={ExImage} alt="Strength Training" />
                                <h3>Strength Training</h3>
                                <p>Build strength...</p>
                            </div>

                            <div className="service-card">
                                <img src={WorkoutImage} alt="Fat Loss Program" />
                                <h3>Fat Loss Program</h3>
                                <p>Burn calories effectively...</p>
                            </div>

                            <div className="service-card">
                                <img src={ExImage3} alt="Yoga Therapy" />
                                <h3>Yoga Therapy</h3>
                                <p>Heal your body...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Ourservices;
