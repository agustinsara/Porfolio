import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 
 function Cards(props) {
  return (
    <div>  
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.descripcion}
                    </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
  </Card>
  </div>
  )
}

export default Cards