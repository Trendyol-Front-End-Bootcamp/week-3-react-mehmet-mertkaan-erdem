import React from "react";
import { Link } from "react-router-dom";
import "./CardStyle.css";

function CharacterCard({ character }) {
  let replacing = character?.name
    ?.replace(/(\w+)\s(\w+)/, "$1-$2")
    .toLowerCase();
  return (
    // Link direkt karta verildiği için Link componenti ile sarıldı
    <Link to={`character/${replacing}`}>
      <div className="character-card" data-testid="character-card-test">
        <img
          className="character-image"
          src={character.image}
          alt={character.name}
        />
        <div className="character-info">
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
        </div>
      </div>
    </Link>
  );
}

export default CharacterCard;
