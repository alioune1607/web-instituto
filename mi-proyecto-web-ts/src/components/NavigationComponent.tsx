import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HouseDoorFill, PersonLinesFill, GearFill } from 'react-bootstrap-icons';

const NavigationComponent: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Web-Insti</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">
              <HouseDoorFill className="me-2" /> Inicio
            </Nav.Link>
            <Nav.Link href="#contacto">
              <PersonLinesFill className="me-2" /> Contacto
            </Nav.Link>
            <Nav.Link href="#servicios">
              <GearFill className="me-2" /> Servicios
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationComponent;