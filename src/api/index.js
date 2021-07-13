import axios from "axios";

export default api = axios
  .get(`https://rickandmortyapi.com/api/character`)
  .then((response) => {
    console.log(response.data);
  });
