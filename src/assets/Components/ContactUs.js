import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // handle input
  const handleChange = (e) => {
    const { name, value } = e.target;

    // phone → only numbers & max 10 digits
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  // validation
  const validateForm = () => {
    let tempErrors = {};

    if (!formData.name.trim())
      tempErrors.name = "Name is required";

    if (!formData.phone)
      tempErrors.phone = "Phone number is required";
    else if (formData.phone.length !== 10)
      tempErrors.phone = "Phone number must be 10 digits";

    if (!formData.email)
      tempErrors.email = "Email is required";
    else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    )
      tempErrors.email = "Enter a valid email address";

    if (!formData.subject.trim())
      tempErrors.subject = "Subject is required";

    if (!formData.message.trim())
      tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // submit
  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const oldData =
      JSON.parse(localStorage.getItem("contactMessages")) || [];

    localStorage.setItem(
      "contactMessages",
      JSON.stringify([...oldData, formData])
    );

    alert("Message sent successfully!");

    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <>
      {/* HERO */}
      <section className="contact-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Contact Us</h1>
          <ul className="breadcrumb">
            <li><Link to="/">Home</Link></li>
            <li>Contact Us</li>
          </ul>
        </div>
      </section>

      <div className="contact-wrapper">

        {/* LEFT */}
        <div className="contact-left">
          <h1>Get In Touch</h1>
          <p>Lorem Ipsum is simply dummy text.</p>

          <div className="contact-info">
            <div className="info-box">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h3>Address</h3>
                <p>132, Tic St, New York</p>
              </div>
            </div>

            <div className="info-box">
              <FaPhoneAlt className="icon" />
              <div>
                <h3>Phone</h3>
                <p>+1 (528) 456-7592</p>
              </div>
            </div>

            <div className="info-box">
              <FaEnvelope className="icon" />
              <div>
                <h3>Email</h3>
                <p>example@fitvibe.com</p>
              </div>
            </div>

            <div className="info-box">
              <FaClock className="icon" />
              <div>
                <h3>Opening Hours</h3>
                <p>Sat–Mon 10am - 8pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <form className="contact-form" onSubmit={sendEmail} noValidate>
          <h1>Send us a Message</h1>

          <div className="input-row">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
              />
              <span className="error">{errors.name}</span>
            </div>

            <div>
              <input
                type="text"
                name="phone"
                placeholder="Phone *"
                value={formData.phone}
                onChange={handleChange}
              />
              <span className="error">{errors.phone}</span>
            </div>
          </div>

          <div className="input-row">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
              />
              <span className="error">{errors.email}</span>
            </div>

            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                value={formData.subject}
                onChange={handleChange}
              />
              <span className="error">{errors.subject}</span>
            </div>
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message *"
              rows="6"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <span className="error">{errors.message}</span>
          </div>

          <button type="submit" className="send-btn">
            SEND MESSAGE →
          </button>
        </form>
      </div>
    </>
  );
}
