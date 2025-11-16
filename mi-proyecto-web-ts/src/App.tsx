import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import HeaderComponent from './components/HeaderComponent';
import NavigationComponent from './components/NavigationComponent';
import SidebarComponent from './components/SidebarComponent';
import ContentComponent from './components/ContentComponent';
import FooterComponent from './components/FooterComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      
      <HeaderComponent />
      
      <NavigationComponent />

      <Container fluid className="p-0">
        <Row className="g-0"> 
          
          <Col md={4} style={{ borderRight: '1px solid #ddd', minHeight: '80vh' }}>
            <SidebarComponent />
          </Col>

          <Col md={8}>
            <ContentComponent />
          </Col>

        </Row>
      </Container>

      <FooterComponent />

    </div>
  );
}

export default App;