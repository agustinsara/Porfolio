import { collection, getDocs } from "firebase/firestore";
import { db } from "../config-firebase.js";
import React, { useEffect, useState } from 'react';
import Cards from "../components/Cards";

const getCardsData = async () => {
    const cardsCollection = collection(db, "proyects");
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
        };
        fetchData();
    }, []);

    return (
        <div className="row">
            {cardsData.map((cardData) => (
                <Cards 
                    key={id} 
                    description={cardData.descripcion} 
                    title={cardData.title} 
                />
            ))}
        </div>
    );
};

export default ExtraccionData;
