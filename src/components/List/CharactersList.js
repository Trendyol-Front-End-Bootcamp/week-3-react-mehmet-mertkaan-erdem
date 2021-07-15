import React, { useState, useEffect } from "react";
import Filter from "../Filters/Filter";
import "./ListStyle.css";
import CharacterCard from "../Card/CharacterCard";

// Karakter kartlarının toplandığı liste
function CharactersList({ characters }) {
  const [status, setStatus] = useState("All");
  const [gender, setGender] = useState("All");
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    setFilteredCharacters(
      JSON.parse(localStorage.getItem("characters"))
        .filter((character) => status === "All" || character.status === status)
        .filter((character) => gender === "All" || character.gender === gender)
    );
  }, [status, gender]);

  return (
    <>
      <Filter
        status={status}
        setStatus={setStatus}
        gender={gender}
        setGender={setGender}
      />
      <div className="character-list">
        {filteredCharacters.map((character, i) => (
          <div key={i}>
            <CharacterCard character={character} />
          </div>
        ))}
      </div>
    </>
  );
}

export default CharactersList;
