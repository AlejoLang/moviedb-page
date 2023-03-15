import React, { useEffect, useState } from "react";
import "./styles.css";

function ListedMovie({ movieData }) {

  const [poster, setPoster] = useState("/images/defaultPoster.png");

  useEffect(() => {
    setPoster(movieData.Poster === "N/A" ? "/images/defaultPoster.png" : movieData.Poster);
  }, [movieData]);

  return (
    <li className="listedMovie">
      <img 
        src={poster} 
        alt={`${movieData.Title} poster`} 
        className="listedMoviePoster"
      />
      <div className="listedMovieInfo">
        <p className="listedMovieTitle">{movieData.Title}</p>
        <p className="listedMovieYear">{movieData.Year}</p>
      </div>
    </li>
  );
}

export default ListedMovie;