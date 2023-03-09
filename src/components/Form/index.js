import React from "react";

function Form() {

  const handleSearch = () => {
    
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" />
      <input type="number" min="1950" max={new Date().getFullYear()}/>
      <select name="" id="">
        <option value="" default>All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>
    </form>
  );
}

export default Form;