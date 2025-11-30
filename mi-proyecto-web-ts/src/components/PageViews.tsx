import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';

// 1. Componente Layout para NOTICIAS (Contiene el OUTLET)
export const NoticiasLayout: React.FC = () => {
  return (
    <Container className="mt-4">
      <h2>📰 Sección de Noticias</h2>
      <p>Selecciona una categoría:</p>
      
      {/* Sub-menú para navegar DENTRO de noticias */}
      <div className="mb-4 d-flex gap-3">
        <Link to="jefatura" className="btn btn-outline-primary">Jefatura de Estudios</Link>
        <Link to="igualdad" className="btn btn-outline-success">Plan de Igualdad</Link>
      </div>

      <div style={{ padding: '20px', border: '1px dashed #ccc', borderRadius: '8px', background: '#f8f9fa' }}>
        <h5>Contenido Dinámico (Outlet):</h5>
        {/* Este es el "hueco" donde se inyectarán los componentes Jefatura o Igualdad */}
        <Outlet /> 
      </div>
    </Container>
  );
};

// 2. Componentes Hijos de Noticias
export const Jefatura: React.FC = () => (
    <Card className="mt-2 border-primary">
        <Card.Body>
            <Card.Title>👨‍🏫 Jefatura de Estudios</Card.Title>
            <Card.Text>Contenido específico de Jefatura.</Card.Text>
        </Card.Body>
    </Card>
);

export const Igualdad: React.FC = () => (
    <Card className="mt-2 border-success">
        <Card.Body>
            <Card.Title>⚖️ Plan de Igualdad</Card.Title>
            <Card.Text>Contenido específico de Igualdad.</Card.Text>
        </Card.Body>
    </Card>
);

// 3. Galería (Andalucía con rutas corregidas)
export const Galeria: React.FC = () => (
    <Container className="mt-4 text-center">
        <h2>📍 Andalucía</h2>
        <Row className="mt-3 justify-content-center">
            
            {/* Las rutas de las imágenes apuntan a la carpeta public/img */}
            
            {/* Foto 1: foto1.jpeg */}
            <Col xs={12} md={4} className="mb-3">
                <Card>
                    <Card.Img variant="top" src="/img/foto1.jpeg" alt="Foto 1 Andalucía" />
                    <Card.Body>
                        <Card.Title>Foto 1</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            
            {/* Foto 2: foto2.jpeg */}
            <Col xs={12} md={4} className="mb-3">
                <Card>
                    <Card.Img variant="top" src="/img/foto2.jpeg" alt="Foto 2 Andalucía" />
                    <Card.Body>
                        <Card.Title>Foto 2</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            
            {/* Foto 3: foto3.jpg */}
            <Col xs={12} md={4} className="mb-3">
                <Card>
                    <Card.Img variant="top" src="/img/foto3.jpg" alt="Foto 3 Andalucía" />
                    <Card.Body>
                        <Card.Title>Foto 3</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

// 4. Error 404 (Para la ruta catch-all)
export const Error404: React.FC = () => (
    <div className="text-center mt-5 text-danger">
        <h1>Error 404</h1>
        <p>Página no encontrada (o ruta Contacto, según la actividad)</p>
        <img src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif" alt="404" width="200" />
    </div>
);