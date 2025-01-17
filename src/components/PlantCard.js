import React, { useState } from "react";

function PlantCard({ plant, handleDeletePlant }) {
  const [soldOut, setSoldOut] = useState(true);

  const handleSoldOutClick = () => {
    setSoldOut((soldOut) => !soldOut);
  };

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {soldOut ? (
        <button className="primary" onClick={handleSoldOutClick}>
          In Stock
        </button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button onClick={() => handleDeletePlant(plant.id)}>🗑️</button>
    </li>
  );
}

export default PlantCard;
