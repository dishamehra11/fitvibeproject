import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logowhite from '../images/logowhite.png';
function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='header'>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <img src={logowhite} alt='logo' className='logo' />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" id='navlink'>
            <Link to="#home" className='nav-link'>HOME</Link>
            <Link to="#pages" className='nav-link'>PAGES</Link>
            <Link to="#ourservices" className='nav-link'>OUR SERVICES</Link>
            <Link to="#blog" className='nav-link'>BLOG</Link>
            <Link to="#shop" className='nav-link'>SHOP</Link>

            {/* <a href='#' className='btn btn-primary' id='appointment-link'>Appointment</a> */}

            <button className='appointment-btn'>Appointment </button> 

            {/* <li><a href="https://wordpress.zozothemes.com/fitvibe/appoinment/" class="dark-bg-button cea-button-link cea-button">
						<span class="cea-button-text">Appointment <i class=" bi-arrow-right ms-1"></i></span>
		
					</a></li> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;