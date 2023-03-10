import React from "react";
import ListedMovie from "../ListedMovie";

function ResultsList({ results }) {
  return (
    <ol>
      {results?.map(movieData => 
        <ListedMovie key={Math.random()} movieData={movieData}/>
      )}
    </ol>
  );
}

export default ResultsList;