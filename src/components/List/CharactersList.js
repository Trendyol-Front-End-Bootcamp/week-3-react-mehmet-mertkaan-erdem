import React, { useState, useEffect } from "react";
import Filter from "../Filters/Filter";
import "./ListStyle.css";
import CharacterCard from "../Card/CharacterCard";

// Karakter kartlarının toplandığı liste
function CharactersList() {
  const [status, setStatus] = useState("All");
  const [gender, setGender] = useState("All");
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setFilteredCharacters(
      JSON.parse(localStorage.getItem("characters"))
        .filter((character) => status === "All" || character.status === status)
        .filter((character) => gender === "All" || character.gender === gender)
    );
    setLoading(false);
  }, [status, gender]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <Filter
        status={status}
        setStatus={setStatus}
        gender={gender}
        setGender={setGender}
      />
      <div className="character-list" data-testid="list-test">
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
