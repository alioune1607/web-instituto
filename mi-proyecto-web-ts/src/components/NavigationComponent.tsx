import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// Importamos Link de react-router-dom
import { Link } from 'react-router-dom';
import { HouseDoorFill, PersonLinesFill, Images, JournalText } from 'react-bootstrap-icons';

const NavigationComponent: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Web-Insti</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            {/* INICIO */}
            <Nav.Link as={Link} to="/">
              <HouseDoorFill className="me-2" /> Inicio
            </Nav.Link>

            {/* GALERÍA */}
            <Nav.Link as={Link} to="/galeria">
              <Images className="me-2" /> Galería
            </Nav.Link>

            {/* NOTICIAS (Outlet) */}
            <Nav.Link as={Link} to="/noticias">
              <JournalText className="me-2" /> Noticias
            </Nav.Link>
            
            {/* CONTACTO (Error 404 intencionado por el ejercicio) */}
            <Nav.Link as={Link} to="/contacto">
              <PersonLinesFill className="me-2" /> Contacto
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationComponent;