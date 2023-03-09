import React from "react";

function Results({ searchedData }) {
  return (
    <div>{searchedData.map(data => <p key={Math.random()}>{data.Title}</p>)}</div>
  );
}

export default Results;