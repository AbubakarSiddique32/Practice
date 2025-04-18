import React from "react";

const CardItem = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
        >
          <h4 className="text-gray-500 text-sm font-semibold">#{card.id}</h4>
          <h1 className="text-lg font-bold text-gray-800 mb-2">{card.title}</h1>
          <p className="text-gray-600">{card.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CardItem;
