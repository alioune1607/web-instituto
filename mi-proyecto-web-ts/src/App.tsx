import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// Componentes Layout (asumidos existentes)
import HeaderComponent from './components/HeaderComponent';
import NavigationComponent from './components/NavigationComponent';
import SidebarComponent from './components/SidebarComponent';
import ContentComponent from './components/ContentComponent'; 
import FooterComponent from './components/FooterComponent';

// Vistas Creadas y Modificadas
import { NoticiasLayout, Jefatura, Igualdad, Galeria, Error404 } from './components/PageViews';
import HeroRenderer from './components/HeroRenderer';
import UserDetail from './components/UserDetail'; // Componente que usa useParams

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* FIX DE ANCHO: Garantizamos que ocupe el 100% del viewport */}
      <div className="App" style={{ width: '100vw', minHeight: '100vh' }}>
        
        <HeaderComponent />
        
        <NavigationComponent />

        <Container fluid className="p-0">
          <Row className="g-0"> 
            
            {/* Columna 1 (40%): Sidebar Fija (Queda fuera del Router) */}
            <Col md={4} style={{ borderRight: '1px solid #ddd', minHeight: '80vh' }}>
              <SidebarComponent />
            </Col>

            {/* Columna 2 (60%): Contenido Dinámico con Routes */}
            <Col md={8}>
              <Routes>
                {/* 1. Ruta de Inicio (Cards) */}
                <Route path="/" element={<ContentComponent />} />

                {/* 2. RUTA DINÁMICA: usePárams (Actividad 2) */}
                <Route path="/usuario/:nombre" element={<UserDetail />} /> 

                {/* 3. Galería (Andalucía) */}
                <Route path="/galeria" element={<Galeria />} />
                
                {/* 4. Actividad JSON (Tabla/Lista) */}
                <Route path="/heroes-json" element={
                    <div className="p-4">
                        <h1 className="mb-4">Resultado de la Actividad JSON</h1>
                        <HeroRenderer publisher="DC Comics" />
                        <HeroRenderer publisher="Marvel Comics" />
                    </div>
                } />

                {/* 5. RUTAS ANIDADAS: Noticias (El Layout contiene el Outlet) */}
                <Route path="/noticias" element={<NoticiasLayout />}>
                    {/* Hijos de /noticias, inyectados en el Outlet */}
                    <Route path="jefatura" element={<Jefatura />} />
                    <Route path="igualdad" element={<Igualdad />} />
                    <Route index element={<p className="mt-3">Selecciona una subsección de noticias.</p>} />
                </Route>

                {/* 6. Catch-All: Para cualquier URL no definida (incluyendo /contacto) */}
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