import React from "react";
import ListedMovie from "../ListedMovie";
import "./styles.css";

function ResultsList({ results }) {
  return (
    <ul className="resultsList">
      {results?.map(movieData => 
        <ListedMovie key={Math.random()} movieData={movieData}/>
      )}
    </ul>
  );
}

export default ResultsList;