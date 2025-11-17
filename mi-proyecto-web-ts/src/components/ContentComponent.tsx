import React from 'react';
import MyCard from './MyCard';
import { Row, Col, Carousel } from 'react-bootstrap'; 

interface CardData {
  title: string;
  text: string;
  img: string;
  style: React.CSSProperties;
}

const cardData: CardData[] = [
  {
    title: "La Alhambra",
    text: "Palacio y fortaleza en Granada.",
    img: "/img/alhambra.jpg",
    style: { border: '2px solid red' }
  },
  {
    title: "Plaza de España",
    text: "Conjunto arquitectónico en Sevilla.",
    img: "/img/sevilla.jpg",
    style: { border: '2px solid green' }
  },
  {
    title: "Mezquita-Catedral",
    text: "Monumento principal de Córdoba.",
    img: "/img/cordoba.jpg",
    style: { border: '2px solid blue' }
  }
];

const ContentComponent: React.FC = () => {
  return (
    <section className="p-4">
      <h2> Como para no venirte a esta comunidad autónoma 😅 </h2>
      <hr />
      
      <h3> Bootstrap Andalucía 🤩 </h3>
      <Row>
        {cardData.map((card, index) => (
          <Col md={4} key={index}>
            <MyCard
              title={card.title}
              text={card.text}
              image={card.img}
              customStyle={card.style}
            />
          </Col>
        ))}
      </Row>

      <hr />

      <h3> Carousel de Andalucía 🫡 </h3>
      
      
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <Carousel>
          <Carousel.Item>
           
            <img
              className="d-block w-100"
              src="/img/galeria1.jpg"
              alt="Galería imagen 1"
            />
            <Carousel.Caption>
              <h3> Cádiz </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/galeria2.jpg"
              alt="Galería imagen 2"
            />
            <Carousel.Caption>
              <h3> Sevilla </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/galeria3.jpg"
              alt="Galería imagen 3"
            />
            <Carousel.Caption>
              <h3> Córdoba </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/galeria4.jpg"
              alt="Galería imagen 4"
            />
            <Carousel.Caption>
              <h3> Granada </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

    </section>
  );
}

export default ContentComponent;