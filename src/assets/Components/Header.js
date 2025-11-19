import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoSearchCircle } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import logowhite from '../images/logowhite.png';

function Header() {
  const Navigate = useNavigate();

  return (
    <Navbar expand="lg" className="header-navbar">
    <Container fluid className="header-container">

        {/* LOGO */}
        <div className="left-nav"></div>
        <img src={logowhite} alt="logo" className="header-logo" />
        <Nav className="ms-4"></Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto header-links">

            <Link to="#home" className="nav-link">HOME</Link>
            <Link to="#pages" className="nav-link">PAGES</Link>
            <Link to="#services" className="nav-link">OUR SERVICES</Link>
            <Link to="#blog" className="nav-link">BLOG</Link>
            <Link to="#shop" className="nav-link">SHOP</Link>

            {/* SEARCH ICON */}
            <div className="right-nav"></div>
            <IoSearchCircle className="search-icon" size={32} />

            {/* APPOINTMENT BUTTON */}
            <button className="appointment-btn" onClick={() => Navigate("/appoinment")}>
              APPOINTMENT →
            </button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
