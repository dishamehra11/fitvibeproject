import React from "react";
import "./LandingSection.css";
import { IoCalendarSharp } from "react-icons/io5";
// import { useNavigate } from 'react-router-dom';

const LandingSection = () => {
    // const navigate = useNavigate();
    return (
        <section className="landing">
            <div className="landing-content">
                <h4 className="welcome">WELCOME TO NUTRITION</h4>
                <h1 className="title">Eat healthy live<br />healthy with us</h1>

                <p className="desc">
                    Your journey to better health starts with the right nutrition! At<br />
                    [Your Brand Name], we make healthy eating simple,<br /> delicious,and
                    sustainable—so you can feel your best every day.
                </p>

                <button className="contact-btn">CONTACT US →</button>

                <div className="reviews">
                    {/* <img src="/users.png" alt="users" className="review-img" /> */}
                    <div>
                        <p>Reviewed by 1.5 million clients</p>
                        <span>⭐⭐⭐⭐⭐ on Trustpilot</span>
                    </div>
                </div>
            </div>

            <div className="landing-image">
                <div className="image-girls">
                    <img src={require('../images/yoga-theme.png')} alt="fitness" />
                </div>
            </div>

            <div className="side-content">
                <h2>Healthy Eating Made Simple and Delicious</h2>

                <ul className="features">
                    <li>✔ Certified Experts with Years of Hands-On Training</li>
                    <li>✔ Personalized Coaching for Every Fitness Level</li>
                    <li>✔ Helping You Push Limits & Smash Goals</li>
                </ul>

                <h1 className="count">165+</h1>
                <p className="note">
                    No strict diets, just nourishing your body with delicious,
                    wholesome food! Start making small changes today.
                </p>

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
        </section>
    );
};

export default LandingSection;
