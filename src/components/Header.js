import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {

  return (
    <Navbar collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      sticky='top'
      >
    <Container>
      <Navbar.Brand href="/">Thomas Fouquert</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="navbarScroll">
          {/* <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          > */}
      {/* <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-`}
              aria-labelledby={`offcanvasNavbarLabel-expand-`}
              placement="end"
              className="bg-dark text-white"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body> */}
                <Nav className="justify-content-end flex-grow-1 pe-3">

                  <Nav.Link href="#profile">Profile</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                  <Nav.Link href="#languages">Langages</Nav.Link>
                  <NavDropdown
                    title="Informations"
                    id={`offcanvasNavbarDropdown-expand-`}
                    menuVariant="dark"
                  >
                    <NavDropdown.Item href="/#experience">
                      Expérience
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/#education">
                      Education
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/#project">
                      Project
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/#skill">
                      Compétences
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>

              {/* </Offcanvas.Body>
            </Navbar.Offcanvas> */}
            </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
