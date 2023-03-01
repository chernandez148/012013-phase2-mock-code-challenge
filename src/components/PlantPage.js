import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantsData, setPlantsData] = useState([]);
  const [plantSearch, setPlantSearch] = useState("");
  const fetchUrl = "http://localhost:6001/plants";
  console.log(plantsData);

  useEffect(() => {
    fetch(fetchUrl)
      .then((resp) => resp.json())
      .then((plantsData) => setPlantsData(plantsData));
  }, []);

  function handleAddNewPlant(plant) {
    setPlantsData([...plantsData, plant]);
  }

  function handleRemovePlant(id) {
    const updatedPlants = plantsData.filter((plant) => plant.id !== id);
    setPlantsData(updatedPlants);
  }

  function handleDeletePlant(id) {
    fetch(fetchUrl + "/" + id, {
      method: "DELETE",
    }).then((resp) => {
      if (resp.status === 200) {
        handleRemovePlant(id);
      }
    });
  }

  return (
    <main>
      <NewPlantForm fetchUrl={fetchUrl} handleAddNewPlant={handleAddNewPlant} />
      <Search setPlantSearch={setPlantSearch} />
      <PlantList
        plantsData={plantsData}
        plantSearch={plantSearch}
        handleDeletePlant={handleDeletePlant}
      />
    </main>
  );
}

export default PlantPage;
