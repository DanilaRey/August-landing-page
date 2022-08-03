import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

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
            <NavDropdown title="CONTACT" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header