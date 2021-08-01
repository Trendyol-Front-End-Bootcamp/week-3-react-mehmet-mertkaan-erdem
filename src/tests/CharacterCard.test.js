import React from "react";
import { shallow, screen } from "@testing-library/react";
import CharacterCard from "../components/Card/CharacterCard";
import { BrowserRouter as Router } from "react-router-dom";

const character = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
    ],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  },
];

const MockedCharacterCard = () => {
  return (
    <Router>
      <CharacterCard character={character} />
    </Router>
  );
};

describe("Character Card", () => {
  shallow(<MockedCharacterCard />);
  it("should renders element", async () => {
    const characterItem = await screen.findAllByTestId(`character-card-test`);
    expect(characterItem).toBeTruthy();
  });
});
