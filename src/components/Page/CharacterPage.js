import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CharacterPage.css";

function CharacterPage({ character }) {
  const [episodes, setEpisodes] = useState([]);

  // Bölüm isimlerini çekebilmek için fetching işlemi
  function getEpisodes() {
    axios.get(`https://rickandmortyapi.com/api/episode/`).then((res) => {
      setEpisodes(res.data.results);
    });
  }

  useEffect(() => {
    getEpisodes();
  }, []);

  //Card componentine verilen linke tıklandığı zaman gelinen sayfa
  return (
    <div className="pageContainer">
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
            <span>Origin:</span> {character.origin.name}
          </p>
          <p>
            <span>Status:</span> {character.status}
          </p>
          <ol className="episodes-list">
            {episodes
              .filter((episode) =>
                episode.characters.includes(
                  `https://rickandmortyapi.com/api/character/${character.id}`
                )
              )
              .map((episode) => <li>{episode.name}</li>)
              .slice(-5)}
          </ol>
        </div>
      </div>
      <Link to="/">
        <button className="backButton">Back</button>
      </Link>
    </div>
  );
}

export default CharacterPage;
