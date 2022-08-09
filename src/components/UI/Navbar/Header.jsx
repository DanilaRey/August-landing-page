import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import OffcanvasShow from '../Offcanvas/OffCanvas';


const Header = () => {
  return (
    <Navbar  bg="light" expand="lg" variant='light' className='navbar__section' id="header">
      <Container>
      <Navbar.Brand href="*" id="logo">REACT LANDING PAGE</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home" to="home" className='nav__links'>FEATURES</Nav.Link>
            <Nav.Link href="#about" to="about" className='nav__links'>ABOUT</Nav.Link>
            <Nav.Link href="#services" to="services" className='nav__links'>SERVICES</Nav.Link>
            <Nav.Link href="#gallary" to="gallary" className='nav__links'>GALLERY</Nav.Link>
            <Nav.Link href="#clients" to='clients' className='nav__links'>TESTIMONIALS</Nav.Link>
            <Nav.Link href="#team" to='team' className='nav__links'>TEAM</Nav.Link>
            <Nav.Link href="#contact" to='contact' className='nav__links'>Contact</Nav.Link>
            <OffcanvasShow id="offcanvas__btn" className='nav__links'/>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header