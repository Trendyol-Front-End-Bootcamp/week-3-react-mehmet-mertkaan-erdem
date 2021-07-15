import React from "react";
import { Link } from "react-router-dom";
import "./CardStyle.css";

function CharacterCard({ character }) {
  return (
    <Link to={`character/${character.name}`}>
      <div className="character-card">
        <img
          className="character-image"
          src={character.image}
          alt={character.name}
        />
        <div className="character-info">
          {/* <Link to="/"></Link> */}
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
        </div>
      </div>
    </Link>
  );
}

export default CharacterCard;