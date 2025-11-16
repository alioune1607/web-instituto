import React from 'react';
import MyCard from './MyCard';
import { Row, Col, Image } from 'react-bootstrap';
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
      <h2>Como para no venirte a esta comunidad autónoma 😅</h2>
      <hr />
      
      <h3>Bootstrap Andalucía 🤩</h3>
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

      <h3>Galería de Andalucía 🫡</h3>
      <Row>

        <Col xs={6} md={3}>
          <Image src="/img/galeria1.jpg" thumbnail />
        </Col>
        <Col xs={6} md={3}>
          <Image src="/img/galeria2.jpg" thumbnail />
        </Col>
        <Col xs={6} md={3}>
          <Image src="/img/galeria3.jpg" thumbnail />
        </Col>
        <Col xs={6} md={3}>
          <Image src="/img/galeria4.jpg" thumbnail />
        </Col>
      </Row>
    </section>
  );
}

export default ContentComponent;