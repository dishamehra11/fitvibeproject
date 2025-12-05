import React from "react";
import "./AboutUs.css";
import { IoCalendarSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
function About() {
     const Navigate = useNavigate();
    return (
        <>
            <section className="about-section">
                <div className="about-container">
                    {/* LEFT SIDE IMAGE + PLAY BUTTON */}
                    <div className="about-image">
                        <img src={require('../images/Stay-Healthy.webp')} alt="About Us" className="main-img" />
                        <button className="play-btn">▶</button>
                    </div>



                    {/* RIGHT SIDE CONTENT */}
                    <div className="about-content">
                        <p className="small-title">ABOUT US</p>
                        <h2 className="main-title">
                            Start Your Yoga Journey <br /> Today with Calm
                        </h2>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                        </p>
                        <div className="call-row">
                            <a href="Appoinment" className="about-book-btn">
                                <div className="calendar-icon">
                                    <IoCalendarSharp /><span></span>
                                </div>
                                <div className="calendar-text">
                                    <p>CALL US</p>
                                    <p>+91 987-936-3380</p>
                                </div>
                            </a>
                            <a href="Appoinment" className="about-book-btn">
                                <div className="calendar-icon">
                                    <IoCalendarSharp /><span></span>
                                </div>
                                <div className="calendar-text">
                                    <p>Book Now</p>
                                    <p>Book Your Call</p>
                                </div>
                            </a>
                        </div>
                        <div className="call-row">
                            <ul className="points-list">
                                <li>✔ 25 Pranayama practice videos</li>
                                <li>✔ Pranayama teacher training manual</li>
                                <li>✔ Proper posture practice manual</li>
                            </ul>
                            <br></br>
                            {/* <button className="learn-more">LEARN MORE →</button> */}
                            <button className="learn-more" onClick={() => Navigate("/aboutus")}>
                                LEARN MORE →
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
