import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import hamburger from './../images/hamburger.png'

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
      <Navbar.Toggle aria-controls="responsive-navbar-nav"  className='text-primary border-0'>
        <img src={hamburger} alt="hamburger" className='avatar-hamburger' />
      </Navbar.Toggle>
            <Navbar.Collapse id="navbarScroll">
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
            </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
