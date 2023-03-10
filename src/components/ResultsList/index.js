import React from "react";
import ListedMovie from "../ListedMovie";

function ResultsList({ results }) {
  return (
    <ul>
      {results?.map(movieData => 
        <ListedMovie key={Math.random()} movieData={movieData}/>
      )}
    </ul>
  );
}

export default ResultsList;