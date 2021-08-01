import React from "react";
import { render, screen } from "@testing-library/react";
import CharacterPage from "../components/Page/CharacterPage";
import { BrowserRouter as Router } from "react-router-dom";

const MockedCharacterPage = (params) => {
  return (
    <Router>
      <CharacterPage params={params} />;
    </Router>
  );
};

describe("Character Page", () => {
  it("should renders character page", () => {
    render(<MockedCharacterPage />);
    const backButtonElement = screen.getByTestId("character-page-test");
    expect(backButtonElement).toBeTruthy();
  });
});
