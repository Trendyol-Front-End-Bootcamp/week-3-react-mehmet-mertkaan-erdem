import React from "react";
import { shallow, screen } from "@testing-library/react";
import CharactersList from "../components/List/CharactersList";
import { BrowserRouter as Router } from "react-router-dom";

const MockedCharactersListComponent = () => {
  return (
    <Router>
      <CharactersList />
    </Router>
  );
};

describe("Characters List Component", () => {
  shallow(<MockedCharactersListComponent />);
  it("should renders list component", () => {
    const CharactersListElement = screen.getByTestId("list-test");
    expect(CharactersListElement).toBeTruthy();
  });
});
