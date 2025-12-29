// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const Register = () => {
//   const navigate = useNavigate(); // must be inside the component
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const handleRegister = (e) => {
//     e.preventDefault();

//     const users = JSON.parse(localStorage.getItem("users")) || [];

//     users.push(formData);

//     localStorage.setItem("users", JSON.stringify(users));

//     // ✅ AFTER REGISTER
//     navigate("/login");
//   };

//   return (
//     <form onSubmit={handleRegister}>
//       {/* form inputs and handlers here */}
//     </form>
//   );
// };

// export default Register;


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./Auth.css";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (!form.name || !form.email || !form.password) {
      setError("Please fill all fields");
      return;
    }

    const exists = users.find((u) => u.email === form.email);
    if (exists) {
      setError("Email already registered. Please login.");
      setTimeout(() => navigate("/login"), 1500);
      return;
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    navigate("/login"); // ✅ register → login
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1>Create Account ✨</h1>
        <p className="subtitle">Start your wellness journey</p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Register →</button>
        </form>

        <p className="switch-text">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}
