import React from "react";

function Search({ setPlantSearch }) {
  const onPlantSearch = (e) => {
    setPlantSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={onPlantSearch}
      />
    </div>
  );
}

export default Search;
