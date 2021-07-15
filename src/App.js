import React, { useState, useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import CharactersList from "./components/List/CharactersList";
import CharacterPage from "./components/Page/CharacterPage";
import Header from "./components/Header/Header";

//  Api
const url = `https://rickandmortyapi.com/api/character`;

function App() {
  const [characters, setCharacters] = useState([]);

  // Api fetching
  function getCharacters() {
    axios.get(url).then((response) => {
      setCharacters(response.data.results);
      localStorage.setItem("characters", JSON.stringify(response.data.results));
    });
  }

  /* Sayfa yüklendiğinde yakalama*/
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        {/* Karakterler listeleniyor  */}
        <Route
          path="/"
          exact
          render={() => {
            return <CharactersList characters={characters} />;
          }}
        ></Route>
        {/* Karakter kartına tıklandığında sayfasına gitme işlemi */}
        <Route
          path="/character/:name"
          render={(renderProps) => {
            const character = characters.find(
              (character) =>
                character.name
                  .replace(/(\w+)\s(\w+)/, "$1-$2")
                  .toLowerCase() === renderProps.match.params.name
            );
            return <CharacterPage {...renderProps} character={character} />;
          }}
        ></Route>
      </div>
    </Router>
  );
}

export default App;
