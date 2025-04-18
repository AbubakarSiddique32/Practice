import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await a.json();
    setCards(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <CardItem cards={cards} />
    </div>
  );
};

export default Cards;
