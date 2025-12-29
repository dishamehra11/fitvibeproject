import React from "react";
import "./Blogs.css";
// import { Link, useNavigate } from "react-router-dom";

function Blogs() {
  return (
    <section className="blog-section">
      <p className="blog-subtitle">OUR BLOG</p>
      <h2 className="blog-title">Our Recent Blogs</h2>

      <div className="blog-container">

        {/* LEFT BIG BLOG */}
        <div className="blog-left">
          <div className="blog-card-large">

            <span className="blog-tag">TRAINING</span>

            <img
              src={require("../images/blog.jpg")}
              alt="blog"
              className="blog-img-large"
            />

            <div className="blog-info">
              <p className="blog-meta">
                👤 ADMIN • MAY 2, 2025
              </p>

              <h3 className="blog-heading">
                Functional Fitness: Train Life and Looks
              </h3>

              <p className="blog-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna..
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE BLOGS */}
        <div className="blog-right">

          {/* SMALL BLOG 1 */}
          <div className="blog-card-small">
            <span className="blog-tag">TRAINING</span>

            <div className="blog-small-content">
              <p className="blog-meta">
                👤 ADMIN • FEBRUARY 24, 2025
              </p>

              <h3 className="blog-heading">
                The Mind-Body Connection: Why It Matters
              </h3>

              <p className="blog-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna..
              </p>
            </div>
          </div>

          {/* SMALL BLOG 2 */}
          <div className="blog-card-small">
            <span className="blog-tag">TRAINING</span>

            <div className="blog-small-content">
              <p className="blog-meta">
                👤 ADMIN • FEBRUARY 24, 2025
              </p>

              <h3 className="blog-heading">
                Bump, Breathe, Balance — The Magic of Prenatal Yoga
              </h3>

              <p className="blog-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna..
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Blogs;
