import axios from "axios";

//  Api
const API_URL = `https://rickandmortyapi.com/api/character`;

// Api fetching
async function getCharacters() {
  await axios.get(API_URL).then((response) => {
    return response.data;
  });
}

export default getCharacters;
