import React from 'react';
// 1. Importaciones del Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// Componentes existentes
import HeaderComponent from './components/HeaderComponent';
import NavigationComponent from './components/NavigationComponent';
import SidebarComponent from './components/SidebarComponent';
import ContentComponent from './components/ContentComponent'; // Tus Cards de héroes
import FooterComponent from './components/FooterComponent';

// 2. Importamos las nuevas vistas
import { NoticiasLayout, Jefatura, Igualdad, Galeria, Error404 } from './components/PageViews';

const App: React.FC = () => {
  return (
    // 3. Envolvemos TODA la App en BrowserRouter
    <BrowserRouter>
      <div className="App">
        
        <HeaderComponent />
        
        <NavigationComponent />

        <Container fluid className="p-0">
          <Row className="g-0"> 
            
            {/* La Sidebar se queda fija a la izquierda */}
            <Col md={4} style={{ borderRight: '1px solid #ddd', minHeight: '80vh' }}>
              <SidebarComponent />
            </Col>

            {/* Columna derecha: AQUÍ CAMBIA EL CONTENIDO SEGÚN LA RUTA */}
            <Col md={8}>
              <Routes>
                {/* Ruta Inicio: Muestra tus Cards de Héroes */}
                <Route path="/" element={<ContentComponent />} />

                {/* Ruta Galería */}
                <Route path="/galeria" element={<Galeria />} />

                {/* Ruta Noticias (ANIDADA con Outlet) */}
                <Route path="/noticias" element={<NoticiasLayout />}>
                    {/* Al entrar en /noticias se muestra el Layout. 
                        Si vamos a /noticias/jefatura, se inyecta Jefatura en el Outlet */}
                    <Route path="jefatura" element={<Jefatura />} />
                    <Route path="igualdad" element={<Igualdad />} />
                </Route>

                {/* Ruta Contacto / Error 404 (Cualquier ruta no definida) */}
                <Route path="*" element={<Error404 />} />
                
              </Routes>
            </Col>

          </Row>
        </Container>

        <FooterComponent />

      </div>
    </BrowserRouter>
  );
}

export default App;