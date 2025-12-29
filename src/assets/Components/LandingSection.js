import React from "react";
import "./LandingSection.css";
import { Link } from "react-router-dom";

const LandingSection = () => {
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

                <Link className="btn contact-btn" to='/contact'>CONTACT US →</Link>

                <div className="reviews">
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
            </div>
        </section>
    );
};

export default LandingSection;
