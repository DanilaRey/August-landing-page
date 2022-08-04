import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar  bg="light" expand="lg" variant='light' className='navbar__section'>
      <Container>
      <Navbar.Brand href="#home" id="logo">REACT LANDING PAGE</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home">FEATURES</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#services">SERVICES</Nav.Link>
            <Nav.Link href="#gallery">GALLERY</Nav.Link>
            <Nav.Link href="#testimonails">TESTIMONIALS</Nav.Link>
            <Nav.Link href="#team">TEAM</Nav.Link>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header