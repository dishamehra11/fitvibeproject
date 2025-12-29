// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email,setEmail] = useState("");
//   const [password,setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const user = JSON.parse(localStorage.getItem("user"));
//     if(user?.email === email && user?.password === password){
//       navigate("/dashboard");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <form onSubmit={handleLogin} className="auth-form">
//       <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
//       <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
//       <button>Login</button>
//     </form>
//   );
// };

// export default Login;


import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.state?.redirectTo || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // ❌ No users in localStorage
    if (users.length === 0) {
      setError("This email is not registered. Please create an account.");
      setTimeout(() => navigate("/register"), 1500);
      return;
    }

    // 🔍 Check email exists
    const existingUser = users.find((u) => u.email === email);

    if (!existingUser) {
      setError("This email is not registered. Please create an account.");
      setTimeout(() => navigate("/register"), 1500);
      return;
    }

    // ❌ Wrong password
    if (existingUser.password !== password) {
      setError("Invalid email or password.");
      return;
    }

    // ✅ LOGIN SUCCESS
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedUser", JSON.stringify(existingUser));

    navigate(redirectTo);
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1>Welcome Back 👋</h1>
        <p className="subtitle">Continue your wellness journey</p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login →</button>
        </form>

        <p className="switch-text">
          Don’t have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}
