import React from "react";

function ResultsList({ results }) {
  return (
    <div>{results?.map(a => <p key={Math.random()}>{a.Title}</p>)}</div>
  );
}

export default ResultsList;