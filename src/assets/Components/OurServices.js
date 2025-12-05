import React from "react";
import "./OurServices.css";
import { IoCalendarSharp } from "react-icons/io5";
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

                    {/* LEFT SIDE TEXT */}
                    <div className="left-box">
                        <p className="small-heading">OUR SERVICES</p>

                        <h1 className="main-title">
                            Transform Your Body,
                            Soothe Your Soul with Yoga
                        </h1>
                    </div>

                    {/* RIGHT SIDE BUTTON */}
                    <button
                        className="services-right-btn"
                        onClick={() => navigate("/our-services")}>
                        OUR SERVICES →
                    </button>
                </div>

                {/* ------------------ SERVICE CARDS ------------------ */}
                <div className="services-grid">
                    <div className="col-lg-3 col-md-9 ">
                        {/* NUMBERS */}
                        <div className="numbers">
                            <div>
                                <h3>10+</h3>
                                <p>Yoga Coaches</p>
                            </div>
                            <div>
                                <h3>8k+</h3>
                                <p>Happy Clients</p>
                            </div>
                        </div>

                        <a href="Appoinment" className="about-book-btn">
                            <div className="calendar-icon">
                                <IoCalendarSharp /><span></span>
                            </div>
                            <div className="calendar-text">
                                <p>Book Now</p>
                                <h6><b>Book Your Class</b></h6>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-9">
                        <div className="my-card-row">
                            <div className="service-card">
                                <img src={ExImage} alt="" />
                                <h3>Lifestyle<br /> Coaching</h3>
                                <p>Work out anytime..</p>
                            </div>

                            <div className="service-card">
                                <img src={WorkoutImage} alt="" />
                                <h3>Recovery & <br />Regeneration</h3>
                                <p>Improve flexibility...</p>
                            </div>

                            <div className="service-card">
                                <img src={ExImage3} alt="" />
                                <h3>Mental<br /> Wellness</h3>
                                <p>Calm your mind...</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section >
    );
}

export default OurServices;
