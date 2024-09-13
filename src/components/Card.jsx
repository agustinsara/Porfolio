import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 
function Cards(props) {
  return (
    <div>  
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} alt="Project Image" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.descripcion}
          </Card.Text>
          <Button variant="primary" href={props.link}>Go? o no Go?</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;