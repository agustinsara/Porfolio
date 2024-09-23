import { collection, getDocs } from "firebase/firestore";
import { db } from "../config-firebase.js";
import React, { useEffect, useState } from 'react';
import Card from "../components/Card.jsx";

const getCardsData = async (filter) => {
    const cardsCollection = collection(db, "projects");
    const cardsSnapshot = await getDocs(cardsCollection);
    const cardsList = cardsSnapshot.docs.map(doc => doc.data());
    
    if (filter) {
        const filteredCards = cardsList.filter(card => card.technology.includes(filter));
        console.log("Proyectos filtrados:", filteredCards);  // <-- Verifica aquí los datos filtrados
        return filteredCards;
    }
    
    console.log("Todos los proyectos:", cardsList);  // <-- Verifica aquí los datos sin filtrar
    return cardsList;
};

const ExtraccionData = ({ filter }) => {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCardsData(filter);  // Pasa `filter` aquí
            console.log("Datos obtenidos:", data);  // <-- Verifica que `data` no es undefined
            setCardsData(data);
        };
        fetchData();
    }, [filter]);  // <-- Añadimos `filter` como dependencia para que se re-ejecute cuando cambie

    return (
        <div className="row">
            <Card cards={cardsData} />
        </div>
    );
};

export default ExtraccionData;
