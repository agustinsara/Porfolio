import { collection, getDocs } from "firebase/firestore";
import { db } from "../config-firebase.js";
import React, { useEffect, useState } from 'react';
import Card from "../components/Card.jsx";

const getCardsData = async () => {
    const cardsCollection = collection(db, "projects");
    const cardsSnapshot = await getDocs(cardsCollection);
    const cardsList = cardsSnapshot.docs.map(doc => doc.data());
    return cardsList;
};

const ExtraccionData = () => {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCardsData();
            setCardsData(data);
             console.log("tu vieja va decir algo" , data) 
        };
        fetchData();
    }, []);

    return (
        <div className="row">
            <Card cards={cardsData}></Card>
            
        </div>
    );
};

export default ExtraccionData;
