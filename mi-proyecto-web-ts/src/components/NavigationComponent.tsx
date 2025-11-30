import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HouseDoorFill, PersonLinesFill, Images, JournalText, CodeSlash } from 'react-bootstrap-icons'; 

const NavigationComponent: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Web-Insti</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link as={Link} to="/"><HouseDoorFill className="me-2" /> Inicio</Nav.Link>
            <Nav.Link as={Link} to="/galeria"><Images className="me-2" /> Andalucía</Nav.Link>
            <Nav.Link as={Link} to="/noticias"><JournalText className="me-2" /> Noticias</Nav.Link>
            <Nav.Link as={Link} to="/heroes-json"><CodeSlash className="me-2" /> JSON Activity</Nav.Link>
            <Nav.Link as={Link} to="/contacto"><PersonLinesFill className="me-2" /> Contacto</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationComponent;