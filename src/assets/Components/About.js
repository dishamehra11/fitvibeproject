import React from "react";
import "./AboutUs.css";
import { IoIosPlay } from "react-icons/io";
import { IoCalendarSharp } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function About() {
    const Navigate = useNavigate();
    return (
        <>
            <section className="about-section">
                <div className="about-container">

                    {/* LEFT IMAGE + PLAY */}
                    <div className="about-image">
                        <img
                            src={require("../images/Stay-Healthy.webp")}
                            alt="About Us"
                            className="main-img"
                        />
                        <button
                            className="play-btn"
                            onClick={() =>
                                window.open(
                                   "https://youtu.be/Z-ukG-K0w28",
                                    "_blank"
                                )
                            }
                        >
                            <IoIosPlay />
                        </button>

                    </div>

                    {/* RIGHT CONTENT */}
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

                        {/* CALL + BOOK SECTION */}
                        <div className="contact-row">

                            {/* CALL BOX */}
                            <div className="contact-box">
                                <div className="round-icon">
                                    <i className="ti ti-headphone-alt"></i>
                                    <BiSolidPhoneCall className="ph-icon-react" />
                                </div>

                                <div className="contact-text">
                                    <span>CALL US</span>
                                    <p>+(528) 456-7592</p>
                                </div>
                            </div>

                            {/* BOOK BOX */}
                            <div className="contact-box" onClick={() => Navigate("/Appointment")}>
                                <div className="round-icon">
                                    <IoCalendarSharp className="calendar-icon-react" />
                                </div>

                                <div className="contact-text">
                                    <span>BOOK NOW</span>
                                    <p>Book Your Class</p>
                                </div>
                            </div>

                        </div>

                        {/* LIST */}
                        <ul className="points-list">
                            <li>✔ 32 Pranayama practice videos</li>
                            <li>✔ Pranayama teacher training manual</li>
                            <li>✔ Pranayama practice manual</li>
                        </ul>

                        <button className="learn-more" onClick={() => Navigate("/aboutus")}>
                            LEARN MORE →
                        </button>

                    </div>
                </div>
            </section>
        </>
    );
}

export default About;

