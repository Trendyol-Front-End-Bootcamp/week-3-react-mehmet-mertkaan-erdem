import React, { useState, useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import CharactersList from "./components/characters/CharactersList";
import CharacterPage from "./components/characters/CharacterPage";
import Header from "./components/Header/Header";

const url = `https://rickandmortyapi.com/api/character`;

function App() {
  const [characters, setCharacters] = useState([]);

  function getCharacters() {
    axios.get(url).then((response) => {
      setCharacters(response.data.results);
    });
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Route
          path="/"
          exact
          render={() => {
            return <CharactersList characters={characters} />;
          }}
        ></Route>
        <Route
          path="/character/:name"
          render={(renderProps) => {
            const character = characters.find(
              (character) => character.name === renderProps.match.params.name
            );
            return <CharacterPage {...renderProps} character={character} />;
          }}
        ></Route>
      </div>
    </Router>
  );
}

export default App;
