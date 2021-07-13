import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CharacterPage.css";

const CharacterPage = ({ character, history }) => {
  // let episodesArray = [];
  // let episodeNames = [];

  // const handleClick = () => {
  //   history.goBack();
  // };

  // const getEpisodeArray = (count) => {
  //   for (let i = 0; i < count; i++) {
  //     episodesArray.push(character.episode[i]);
  //   }
  // };

  // function getEpisodes() {
  //   episodesArray.map((e) => {
  //     axios.get(e).then((response) => {
  //       episodeNames.push(response.data.name);
  //     });
  //   });
  // }

  // useEffect(() => {
  //   getEpisodes();
  //   console.log("useEffect", episodeNames);
  // });

  // let dizi;

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
          <p>{/* <span>Episodes:</span> {character.episode} */}</p>
        </div>
      </div>
      <Link to="/">
        <button className="backButton">Back</button>
      </Link>

      {/* <button onClick={getEpisodeArray(5)}>Episodes Array</button>
      <button onClick={getEpisodes}>Name</button> */}
    </div>
  );
};

export default CharacterPage;
