import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Appointment() {
  const navigate = useNavigate();

  // 🔐 LOGIN CHECK (extra safety)
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/login", {
        state: { redirectTo: "/Appointment" },
      });
    }
  }, [navigate]);

  const [service, setService] = useState("");
  const [employee, setEmployee] = useState("Any");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // 🔹 Date formatter (yyyy-mm-dd → dd/mm/yyyy)
  const formatDateDMY = (dateValue) => {
    const [yyyy, mm, dd] = dateValue.split("-");
    return `${dd}/${mm}/${yyyy}`;
  };

  // ✅ SUBMIT LOGIC
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!service || !date || !startTime || !endTime) {
      alert("Please fill all required fields");
      return;
    }

    const newAppointment = {
      service,
      employee,
      date: formatDateDMY(date),
      startTime,
      endTime,
      createdAt: new Date().toISOString(),
    };

    const oldAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    localStorage.setItem(
      "appointments",
      JSON.stringify([...oldAppointments, newAppointment])
    );

    alert("Appointment booked successfully!");

    // 🔹 Reset form
    setService("");
    setEmployee("Any");
    setDate("");
    setStartTime("");
    setEndTime("");
  };

  return (
    <>
      {/* HERO */}
      <section className="Appoinment-hero">
        <div className="Appoinment-content">
          <h1>Appointment</h1>
          <nav>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Appointment</li>
            </ul>
          </nav>
        </div>
      </section>

      {/* FORM */}
      <div className="appointment-container">
        <div className="appointment-form">
          <div className="image-section">
            <img
              src={require("../images/blog.jpg")}
              alt="Yoga"
              className="image-class"
            />
          </div>

          <div className="form-section">
            <h2>Appointment</h2>

            <form onSubmit={handleSubmit}>
              <label>Service *</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="">Select service</option>
                <option value="Yoga">Yoga</option>
                <option value="Fitness Coaching">
                  Fitness Coaching
                </option>
                <option value="Nutrition Coaching">
                  Nutrition Coaching
                </option>
              </select>

              <label>Employee</label>
              <select
                value={employee}
                onChange={(e) => setEmployee(e.target.value)}
              >
                <option value="Any">Any</option>
                <option value="John">John</option>
                <option value="Jane">Jane</option>
              </select>

              <label>Date *</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <label>Start From *</label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />

              <label>Finish By *</label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />

              <button type="submit" className="sbtn">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* MAP */}
        <div className="appointment-map">
          <iframe
            title="India Gate Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.547341057026!2d77.23034507613613!3d28.612912982417955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b29b2b23b3%3A0x5f1a5d68c6f6f4de!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1702196000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
