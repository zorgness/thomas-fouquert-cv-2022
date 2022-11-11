import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Thomas Fouquert</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-`}
              aria-labelledby={`offcanvasNavbarLabel-expand-`}
              placement="end"
              className="bg-dark text-white"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Acceuil</Nav.Link>
                  <Nav.Link href="#action2">Profile</Nav.Link>
                  <Nav.Link href="#action2">Languages</Nav.Link>
                  <NavDropdown
                    title="Informations"
                    id={`offcanvasNavbarDropdown-expand-`}
                  >
                    <NavDropdown.Item href="#action3">
                      Expérience
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Education
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Projet
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Compétences
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Contact
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
    </Container>
  </Navbar>
  )
}

export default Header
