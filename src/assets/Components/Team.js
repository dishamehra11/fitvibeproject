import React from "react";
import "./Team.css";
import { Link } from "react-router-dom";

import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";
import p4 from "../images/p4.jpg";
import p5 from "../images/p5.jpg";
import p6 from "../images/p6.jpg";

export default function Team() {
  const members = [
    { name: "Maya Patel", role: "Conditioning", img: p1 },
    { name: "Smith Cross", role: "Crossfit Coach", img: p2 },
    { name: "Jane Mason", role: "Nutritionist", img: p3 },
    { name: "Helen Turner", role: "Dietitian", img: p4 },
    { name: "Leila Noor", role: "Fitness", img: p5 },
    { name: "Sofia Grace", role: "Meditation", img: p6 },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>Our Team</h1>

          <nav>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Our Team</li>
            </ul>
          </nav>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team-section">
        <h2 className="team-title">Our Team</h2>

        <div className="team-grid">
          {members.map((m, index) => (
            <div className="team-card" key={index}>
              <div className="img-wrapper">
                <img src={m.img} alt={m.name} className="team-img" />

                {/* SOCIAL ICONS (VALID LINKS) */}
                <div className="social-icons">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>

              <div className="team-info">
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
