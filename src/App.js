import React, { useState } from "react";
import Form from "./components/Form";
import Results from "./components/Results";

function App() {

  const [searchedData, setSearchedData] = useState([]);

  return (
    <div>
      <Form setSearchedData={setSearchedData}/>
      <Results searchedData={searchedData} setSearchedData={setSearchedData}/>
    </div>
  );
}

export default App;