import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiSearch, CiUser } from "react-icons/ci";
import { AiOutlinePoweroff } from "react-icons/ai";
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import logowhite from '../images/logowhite.png';
import { useEffect, useState } from 'react';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ CHECK LOGIN STATUS ON ROUTE CHANGE
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, [location.pathname]);

  // ✅ LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedUser");
    setIsLoggedIn(false);
    navigate("/");
  };

  // ✅ APPOINTMENT CLICK LOGIC
  const handleAppointmentClick = () => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (loggedIn) {
      navigate("/appointment");
    } else {
      navigate("/login", {
        state: { redirectTo: "/appointment" },
      });
    }
  };

  return (
    <Navbar expand="lg" className="header-navbar">
      <Container fluid className="header-container">

        {/* LOGO */}
        <NavLink to="/">
          <img src={logowhite} alt="logo" className="header-logo" />
        </NavLink>

        {/* RIGHT SIDE */}
        <div className="header-right">

          {/* NAV LINKS */}
          <Nav className="header-links">
            <NavLink to="/" end className="nav-link">HOME</NavLink>
            <NavLink to="/aboutus" className="nav-link">ABOUT US</NavLink>
            <NavLink to="/ourservices" className="nav-link">OUR SERVICES</NavLink>
            <NavLink to="/blog" className="nav-link">BLOG</NavLink>
            <NavLink to="/shop" className="nav-link">SHOP</NavLink>
            <NavLink to="/contact" className="nav-link">CONTACT US</NavLink>
          </Nav>

          {/* SEARCH ICON */}
          <CiSearch className="search-icon" />

          {/* LOGIN ICON */}
          {!isLoggedIn && (
            <CiUser
              className="login-icon"
              title="Login"
              onClick={() => navigate("/login")}
            />
          )}

          {/* LOGOUT ICON */}
          {isLoggedIn && (
            <AiOutlinePoweroff
              className="logout-icon"
              title="Logout"
              onClick={handleLogout}
            />
          )}

          {/* APPOINTMENT BUTTON */}
          <button
            className="appointment-btn"
            onClick={handleAppointmentClick}
          >
            APPOINTMENT →
          </button>

        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
