import React, { useEffect, useState } from "react";

function ListedMovie({ movieData }) {

  const [poster, setPoster] = useState("/images/defaultPoster.png");

  useEffect(() => {
    setPoster(movieData.Poster === "N/A" ? "/images/defaultPoster.png" : movieData.Poster);
  }, [movieData]);

  return (
    <li>
      <img src={poster} alt={`${movieData.Title} poster`} />
      <p>{movieData.Title}</p>
      <p>{movieData.Year}</p>
    </li>
  );
}

export default ListedMovie;