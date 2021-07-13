import React from "react";
import Filter from "../Filters/Filter";
import "./ListStyle.css";

import CharacterCard from "../Card/CharacterCard";

function CharactersList({ characters }) {
  return (
    <>
      <Filter />
      <div className="character-list">
        {characters.map((character, i) => (
          <div key={i}>
            <CharacterCard character={character} />
          </div>
        ))}
      </div>
    </>
  );
}

export default CharactersList;
