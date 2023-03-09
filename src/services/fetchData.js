async function fetchData ({ params }) {

  const QUERRY = new URLSearchParams(params);
  const API_KEY = process.env.REACT_APP_API_KEY;

  let data = await fetch ("https://www.omdbapi.com/?apikey=" + API_KEY + "&" + QUERRY);
  let json = await data.json();

  return json;
}

export default fetchData;