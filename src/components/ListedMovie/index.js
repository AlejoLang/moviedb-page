import React from "react";

function ListedMovie({ movieData }) {
  console.log(movieData);
  return (
    <li>
      <img src={movieData.Poster} alt={`${movieData.Title} poster`} />
      <p>{movieData.Title}</p>
      <p>{movieData.Year}</p>
    </li>
  );
}

export default ListedMovie;