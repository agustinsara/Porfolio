import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

function Cards(props) {
  return (
    <Carousel>
      {props.cards.map((card, id) => (
       <Carousel.Item key={id}>
          <div style={{ margin: '20px', flexBasis: '300px', flexGrow: 1 }}>  
            <Card style={{ width: '100%', maxWidth: '300px' }}>
              <Card.Img variant="top" src={card.image} alt="Project Image" />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                  {card.descripcion}
                </Card.Text>
                <Button variant="primary" href={card.link}>Ir al Repo</Button>
              </Card.Body>
            </Card>
        </div>
      </Carousel.Item>
    ))}
    </Carousel>     
  );
}

export default Cards;
