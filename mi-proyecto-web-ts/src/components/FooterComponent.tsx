import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, Youtube, MortarboardFill } from 'react-bootstrap-icons';

const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-dark text-white p-4 text-center">
      <Container>
        <Row>
          <Col>
            <h5>Redes Sociales</h5>
            <a href="https://facebook.com" className="text-white me-3 fs-3">
              <Facebook />
            </a>
            <a href="https://twitter.com" className="text-white me-3 fs-3">
              <Twitter />
            </a>
            <a href="https://instagram.com" className="text-white me-3 fs-3">
              <Instagram />
            </a>
            <a href="https://youtube.com" className="text-white me-3 fs-3">
              <Youtube />
            </a>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <h5>Enlace al Instituto</h5>
            <a href="https://iescuravalera.es" target="_blank" rel="noopener noreferrer" className="text-white">
              <MortarboardFill className="me-2" /> iescuravalera.es
            </a>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p>&copy; 2025 - Mi Proyecto de React</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComponent;