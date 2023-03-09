/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import fetchData from "../../services/fetchData";

function Results({ searchedData, setSearchedData }) {

  const [paginatorIndex, setPaginatorIndex] = useState(1);
  const [maxIndex, setMaxIndex] = useState(10);

  useEffect(() => {
    setMaxIndex(
      Math.ceil(searchedData.totalResults / 10)
    ); 
  }, [searchedData]);

  useEffect(() => {
    const QUERRY = {
      ...searchedData.QUERRY,
      page: paginatorIndex
    };
    async function getData () {
      let results = await fetchData(QUERRY);
      results.QUERRY = QUERRY;
      setSearchedData(results ?? []);
    }
    getData();
  }, [paginatorIndex]);

  return (
    <div>
      <ul>
        {searchedData?.Search?.map(data => <p key={Math.random()}>{data.Title}</p>)}
      </ul>
      <div className="paginator">
        <button onClick={() => {setPaginatorIndex((lastVal) => lastVal - 1 > 0 ? lastVal - 1 : 1);}}>{"<"}</button>
        <p>{paginatorIndex} / {Number.isNaN(maxIndex) ? 1 : maxIndex}</p>
        <button onClick={() => {setPaginatorIndex((lastVal) => lastVal + 1 <= maxIndex ? lastVal + 1 : maxIndex);}}>{">"}</button>
      </div>
    </div>
  );
}

export default Results;