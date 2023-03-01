import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsData, plantSearch, handleDeletePlant }) {
  console.log(plantsData);

  const searchResults = plantsData.filter((plant) => {
    return plant.name.toLowerCase().includes(plantSearch.toLowerCase());
  });

  const renderPlantsData = searchResults.map((plant) => {
    return (
      <PlantCard
        key={plant.id}
        plant={plant}
        handleDeletePlant={handleDeletePlant}
      />
    );
  });
  return <ul className="cards">{renderPlantsData}</ul>;
}

export default PlantList;
