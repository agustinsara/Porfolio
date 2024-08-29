import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../config-firebase.js';
import React, { useEffect, useState } from 'react';


 const getCardsData = async () => {
    const cardsCollection = collection(db, "proyect");
    const cardsSnapshot = await getDocs(cardsCollection);
    const cardsList = cardsSnapshot.docs.map(doc => doc.data());
    return cardsList;
    console.log(cardsList);
  };
  
  const [cardsdata,setCardsData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCardsData();
      setCardsData(data);  
    };
    fetchData();
  }, []);

function Cards() {
  return (
    <div>  
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
  </Card>
  </div>
  )
}

export default Cards