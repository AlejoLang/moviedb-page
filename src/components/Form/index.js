import React, { useState } from "react";
import fetchData from "../../services/fetchData";
import "./styles.css";

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
    let results = await fetchData(QUERRY);
    results.QUERRY = QUERRY;
    setSearchedData(results ?? []);
  };

  return (
    <form 
      onSubmit={handleSearch} 
      className="searchForm"
    >
      <input 
        type="text"
        name="Movie name"
        className="movieNameInput"
        placeholder="Insert a movie name"
        required 
        autoComplete="off"
        onChange={(e) => {setSearchedMovie(e.target.value);}}
      />
      <input 
        type="number"
        name="Movie year"
        className="movieYearInput"
        placeholder="Year"
        min="1950" 
        max={new Date().getFullYear()} 
        onChange={(e) => {setSearchedYear(e.target.value);}}
      />
      <select 
        name="Search type" 
        className="movieTypeInput"
        id="" 
        onChange={(e) => {setSearchedType(e.target.options[e.target.selectedIndex].value);}}
      >
        <option value="" default className="movieTypeInputOption">All</option>
        <option value="movie" className="movieTypeInputOption">Movie</option>
        <option value="series" className="movieTypeInputOption">Series</option>
        <option value="episode" className="movieTypeInputOption">Episode</option>
      </select>
      <button className="searchBtn">Submit</button>
    </form>
  );
}

export default Form;