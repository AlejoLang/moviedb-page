/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

function Results({ searchedData, setSearchedData }) {

  const [paginatorIndex, setPaginatorIndex] = useState(1);
  const [maxIndex, setMaxIndex] = useState(10);

  useEffect(() => {
    setMaxIndex(
      Math.ceil(searchedData.totalResults / 10)
    ); 
  }, [searchedData]);

  return (
    <div>
      <ul>

      </ul>
      <div className="paginator">
        <button onClick={() => {setPaginatorIndex((lastVal) => lastVal - 1 > 0 ? lastVal - 1 : 1);}}>{"<"}</button>
        <input 
          type="number" 
          min={1} 
          max={maxIndex} 
          value={paginatorIndex} 
          onChange={(e) => {setPaginatorIndex(e.target.value);}}
        />
        <p> / {Number.isNaN(maxIndex) ? 1 : maxIndex}</p>
        <button onClick={() => {setPaginatorIndex((lastVal) => lastVal + 1 <= maxIndex ? lastVal + 1 : maxIndex);}}>{">"}</button>
      </div>
    </div>
  );
}

export default Results;