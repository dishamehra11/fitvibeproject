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

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedUser");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleAppointmentClick = () => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (loggedIn) {
      navigate("/appointment");
    } else {
      navigate("/login", { state: { redirectTo: "/appointment" } });
    }
  };

  return (
    <Navbar expand="lg" className="header-navbar" bg="dark" variant="dark" sticky="top">
      <Container fluid className="header-container">

        {/* LOGO */}
        <NavLink to="/">
          <img src={logowhite} alt="logo" className="header-logo" />
        </NavLink>

        {/* TOGGLE BUTTON */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* COLLAPSIBLE MENU */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="header-links align-items-center">

            {/* NAV LINKS */}
            <NavLink to="/" end className="nav-link">HOME</NavLink>
            <NavLink to="/aboutus" className="nav-link">ABOUT US</NavLink>
            <NavLink to="/ourservices" className="nav-link">OUR SERVICES</NavLink>
            <NavLink to="/blog" className="nav-link">BLOG</NavLink>
            <NavLink to="/shop" className="nav-link">SHOP</NavLink>
            <NavLink to="/contact" className="nav-link">CONTACT US</NavLink>

            {/* SEARCH ICON */}
            <CiSearch className="search-icon ms-3" />

            {/* LOGIN / LOGOUT */}
            {!isLoggedIn && (
              <CiUser
                className="login-icon ms-3"
                title="Login"
                onClick={() => navigate("/login")}
              />
            )}
            {isLoggedIn && (
              <AiOutlinePoweroff
                className="logout-icon ms-3"
                title="Logout"
                onClick={handleLogout}
              />
            )}

            {/* APPOINTMENT BUTTON */}
            <button
              className="appointment-btn ms-3"
              onClick={handleAppointmentClick}
            >
              APPOINTMENT →
            </button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
