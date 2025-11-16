import React from 'react';
import { Card } from 'react-bootstrap';

interface MyCardProps {
  title: string;
  text: string;
  image: string;
  customStyle: React.CSSProperties; 
}

const MyCard: React.FC<MyCardProps> = ({ title, text, image, customStyle }) => {
  return (
    <Card style={{ ...customStyle, width: '18rem' }} className="mb-3">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyCard;