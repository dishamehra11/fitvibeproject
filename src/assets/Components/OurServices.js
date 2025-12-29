import React from "react";
import "./OurServices.css";
// import { IoCalendarSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import ExImage from "../images/ex.jpg";
import WorkoutImage from "../images/Workout.jpg";
import ExImage3 from "../images/ex3.webp";

function OurServices() {
    const navigate = useNavigate();

    return (
        <section className="services-section">
            <div className="services-container">

                {/* ---------------- TOP LEFT + RIGHT SECTION ---------------- */}
                <div className="top-wrapper">
                    <div className="left-box">
                        <p className="small-heading">OUR SERVICES</p>

                        <h1 className="main-title">
                            Transform Your Body,Soothe Your Soul<br></br> with Yoga
                        </h1>
                    </div>

                    <button
                        className="services-right-btn"
                        onClick={() => navigate("/ourservices")}>
                        OUR SERVICES →
                    </button>
                </div>

                {/* ----------- 3 + 3 GRID SERVICES SECTION ------------- */}
                <div className="services-grid-2row">

                    {/* ROW 1 */}
                    <div className="row">
                        <div className="service-card">
                            <img src={ExImage} alt="" />
                            <h3>Lifestyle Coaching</h3>
                            <p>Work out anytime..</p>
                        </div>

                        <div className="service-card">
                            <img src={WorkoutImage} alt="" />
                            <h3>Recovery & Regeneration</h3>
                            <p>Improve flexibility...</p>
                        </div>

                        <div className="service-card">
                            <img src={ExImage3} alt="" />
                            <h3>Mental Wellness</h3>
                            <p>Calm your mind...</p>
                        </div>
                    </div>

                    {/* ROW 2 */}
                    <div className="row">
                        <div className="service-card">
                            <img src={ExImage} alt="" />
                            <h3>Strength Training</h3>
                            <p>Build strength...</p>
                        </div>

                        <div className="service-card">
                            <img src={WorkoutImage} alt="" />
                            <h3>Fat Loss Program</h3>
                            <p>Burn calories effectively...</p>
                        </div>

                        <div className="service-card">
                            <img src={ExImage3} alt="" />
                            <h3>Yoga Therapy</h3>
                            <p>Heal your body...</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default OurServices;
