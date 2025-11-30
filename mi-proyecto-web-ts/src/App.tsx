import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// Componentes existentes
import HeaderComponent from './components/HeaderComponent';
import NavigationComponent from './components/NavigationComponent';
import SidebarComponent from './components/SidebarComponent';
import ContentComponent from './components/ContentComponent'; 
import FooterComponent from './components/FooterComponent';

// Vistas Modificadas/Nuevas
import { NoticiasLayout, Jefatura, Igualdad, Galeria, Error404 } from './components/PageViews';
import HeroRenderer from './components/HeroRenderer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* FIX DE ANCHO: Garantizamos que ocupe todo el viewport */}
      <div className="App" style={{ width: '100vw', minHeight: '100vh' }}>
        
        <HeaderComponent />
        
        <NavigationComponent />

        <Container fluid className="p-0">
          <Row className="g-0"> 
            
            {/* Columna 1 (40%): Sidebar Fija */}
            <Col md={4} style={{ borderRight: '1px solid #ddd', minHeight: '80vh' }}>
              <SidebarComponent />
            </Col>

            {/* Columna 2 (60%): Contenido Dinámico con Routes */}
            <Col md={8}>
              <Routes>
                {/* 1. Inicio: Muestra las Cards */}
                <Route path="/" element={<ContentComponent />} />

                {/* 2. Galería (Andalucía) */}
                <Route path="/galeria" element={<Galeria />} />
                
                {/* 3. Actividad JSON */}
                <Route path="/heroes-json" element={
                    <div className="p-4">
                        <HeroRenderer publisher="DC Comics" />
                        <HeroRenderer publisher="Marvel Comics" />
                    </div>
                } />

                {/* 4. RUTAS ANIDADAS: Noticias */}
                <Route path="/noticias" element={<NoticiasLayout />}>
                    {/* Hijos de /noticias, inyectados en el Outlet */}
                    <Route path="jefatura" element={<Jefatura />} />
                    <Route path="igualdad" element={<Igualdad />} />
                    <Route index element={<p className="mt-3">Selecciona una subsección de noticias.</p>} />
                </Route>

                {/* 5. Catch-All: Para cualquier URL no definida (incluyendo /contacto) */}
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