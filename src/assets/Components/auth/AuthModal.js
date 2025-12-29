import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./AuthModal.css";

const AuthModal = ({ onClose }) => {
  const [view, setView] = useState("login");

  return (
    <div className="auth-overlay">
      <div className="auth-box">
        <button className="auth-close" onClick={onClose}>×</button>

        {view === "login" ? (
          <Login
            switchToRegister={() => setView("register")}
            onSuccess={() => {
              onClose(); // ✅ close modal after login
            }}
          />
        ) : (
          <Register
            switchToLogin={() => setView("login")}
          />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
