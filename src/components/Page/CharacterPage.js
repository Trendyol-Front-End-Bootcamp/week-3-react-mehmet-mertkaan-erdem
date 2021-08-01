import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CharacterPage.css";

import BackButton from "../BackButton/BackButton";

const BASE_URL = "https://rickandmortyapi.com/api/character/?name=";

function CharacterPage(props) {
  const characterName = formatName(props.match?.params?.name);
  const [character, setCharacter] = useState({});
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    getCharacter(characterName); // eslint-disable-next-line
  }, []);

  async function getCharacter(characterName) {
    await axios
      .get(BASE_URL + characterName)
      .then((response) => {
        setCharacter(response.data.results[0]);
        return response.data.results[0];
      })
      .then((character) => getEpisodeUrlArray(character, 5))
      .then((characterEpisodeURLs) => {
        return Promise.all(
          characterEpisodeURLs.map((episodeUrl) => fetch(episodeUrl))
        );
      })
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((results) => setEpisodes(results.map((result) => result.name)));
  }

  function getEpisodeUrlArray(character, number) {
    let array = character.episode.slice(-number);
    return array;
  }

  function formatName(str) {
    return str.split("-").join(" ");
  }

  return (
    <div className="pageContainer" data-testid="character-page-test">
      <h1 className="name">{character.name}</h1>
      {/* Bilgiler Başlangıç   */}
      <div className="character">
        <img className="image" src={character.image} alt={character.name} />
        <div className="info">
          <p>
            <span>Name:</span> {character.name}
          </p>
          <p>
            <span>Species:</span> {character.species}
          </p>
          <p>
            <span>Gender:</span> {character.gender}
          </p>
          <p>
            <span>Origin:</span> {character?.origin?.name}
          </p>
          <p>
            <span>Status:</span> {character.status}
          </p>
          <ol className="episodes-list">
            {episodes.map((episode, i) => (
              <li key={i}>{episode}</li>
            ))}
          </ol>
        </div>
      </div>
      <BackButton buttonTitle="Go Back" />
    </div>
  );
}

export default CharacterPage;
