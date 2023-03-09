import React, { useState } from "react";
import fetchData from "../../services/fetchData";

function Form({ setSearchedData }) {

  const [searchedMovie, setSearchedMovie] = useState("");
  const [searchedYear, setSearchedYear] = useState("");
  const [searchedType, setSearchedType] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const QUERRY = {
      s: searchedMovie,
      type: searchedType,
      y: searchedYear
    };
    let {Search} = await fetchData(QUERRY);

    setSearchedData(Search ?? []);
  };

  return (
    <form onSubmit={handleSearch}>
      <input 
        type="text"
        name="Movie name"
        placeholder="Insert a movie name"
        required 
        onChange={(e) => {setSearchedMovie(e.target.value);}}
      />
      <input 
        type="number"
        name="Movie year"
        placeholder="2004"
        min="1950" 
        max={new Date().getFullYear()} 
        onChange={(e) => {setSearchedYear(e.target.value);}}
      />
      <select 
        name="Search type" 
        id="" 
        onChange={(e) => {setSearchedType(e.target.options[e.target.selectedIndex].value);}}
      >
        <option value="" default>All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>
      <button>Submit</button>
    </form>
  );
}

export default Form;